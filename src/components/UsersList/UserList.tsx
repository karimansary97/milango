import React, {FC, memo} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import unit from '../../styles/unit';
import UserCard from './UserCard';
import NoDataFound from '../UIElements/NoDataFound';
import Loading from '../UIElements/Loading';
import ErrorHappen from '../UIElements/ErrorHappen';
import ListFooterLoading from '../UIElements/ListFooterLoading';
import Users from '../../types/Users.type';
import colors from '../../styles/colors';

type UserListProps = {
  data: Users;
  loading: boolean;
  hasNextPage: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
};

const UserList: FC<UserListProps> = ({
  data,
  loading,
  isError,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  refetch,
}) => {
  if (loading && !isFetchingNextPage) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorHappen />;
  }
  if (!data?.length) {
    return <NoDataFound des="Please search for user" />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id + ''}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={refetch}
            colors={[colors.secondary]}
          />
        }
        onEndReached={() => {
          hasNextPage && fetchNextPage();
        }}
        renderItem={({item}) => (
          <UserCard
            name={item?.login}
            image={item?.avatar_url}
            sharedUrl={item?.url}
          />
        )}
        ListFooterComponent={
          <ListFooterLoading hasLoading={isFetchingNextPage} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10 * unit,
  },
  content: {
    paddingVertical: 10 * unit,
  },
});

export default memo(UserList);
