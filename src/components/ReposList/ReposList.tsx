import React, {FC, memo, useCallback} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import RepoCard from './RepoCard';
import ListFooterLoading from '../UIElements/ListFooterLoading';
import Loading from '../UIElements/Loading';
import ErrorHappen from '../UIElements/ErrorHappen';
import NoDataFound from '../UIElements/NoDataFound';

type ReposListProps = {
  data: any;
  loading: boolean;
  hasNextPage: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
};

const ReposList: FC<ReposListProps> = ({
  data,
  loading,
  isError,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  refetch,
}) => {
  const renderItem = useCallback(
    ({item}: any) => (
      <RepoCard
        name={item?.name}
        language={item?.language}
        stars={item?.stargazers_count}
      />
    ),
    [],
  );

  if (loading && !isFetchingNextPage) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorHappen />;
  }
  if (!data?.length) {
    return <NoDataFound des="That user didn't have any repos" />;
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
        renderItem={renderItem}
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
  },
  content: {
    paddingVertical: 10 * unit,
  },
});

export default memo(ReposList);
