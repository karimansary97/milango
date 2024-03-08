import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>New Screen Home </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
