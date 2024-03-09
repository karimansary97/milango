import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout from '../../components/UIElements/Layout';

type UserRepoProps = {};

const UserRepo: FC<UserRepoProps> = ({}) => {
  return (
    <Layout HeaderVisablity>
      <View></View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserRepo;
