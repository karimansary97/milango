import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/UIElements/Layout';
import EndPoints from '../../apis/EndPoints';
import useGetInfiniteQuery from '../../hooks/useGetInfiniteQuery';
import useRoute from '../../hooks/useRoute';
import ReposList from '../../components/ReposList';
import UserRepoType from '../../types/UserRepo.type';

type UserReposProps = {};

const UserRepos: FC<UserReposProps> = ({}) => {
  const {params} = useRoute();
  const {name} = params;
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
    queryKey: ['userRepos', name],
    endPoint: `${EndPoints.User_Repos}${name}/repos?`,
  });
  return (
    <Layout style={styles.container} HeaderVisablity>
      <ReposList
        data={data as UserRepoType}
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
  },
});

export default UserRepos;
