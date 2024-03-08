import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/Home/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type AppProps = {};

const App: FC<AppProps> = ({}) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
