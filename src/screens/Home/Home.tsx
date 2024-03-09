import React, {FC, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputSubmitEditingEventData,
} from 'react-native';
import Layout from '../../components/UIElements/Layout';
import SearchBar from '../../components/UIElements/SearchBar';
import useGetInfiniteQuery from '../../hooks/useGetInfiniteQuery';
import EndPoints from '../../apis/EndPoints';
import UserList from '../../components/UsersList/UserList';
import unit from '../../styles/unit';
import Users from '../../types/Users.type';

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onSubmitEditing = ({
    nativeEvent: {text},
  }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    setSearchQuery(text);
  };
  const onClear = () => {
    setSearchQuery('');
  };
  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useGetInfiniteQuery({
    queryKey: ['users', searchQuery],
    endPoint: `${EndPoints.Find_Users}q=${searchQuery}`,
    options: {enabled: !!searchQuery},
  });

  return (
    <Layout style={styles.container}>
      <SearchBar onClear={onClear} onSubmitEditing={onSubmitEditing} />
      <UserList
        data={data as Users}
        loading={isLoading || isFetching}
        hasNextPage={hasNextPage}
        isError={isError}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        refetch={refetch}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26 * unit,
  },
});

export default Home;
