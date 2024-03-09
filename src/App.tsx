import 'react-native-gesture-handler';
import 'react-native-devsettings';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/Home/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import appQueryClient, {asyncStoragePersister} from './config/appQueryClient';
import RNBootSplash from 'react-native-bootsplash';

type AppProps = {};

const App: FC<AppProps> = ({}) => {
  const onNavReady = () => {
    RNBootSplash.hide({fade: true});
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <PersistQueryClientProvider
        client={appQueryClient}
        persistOptions={{
          persister: asyncStoragePersister,
        }}>
        <NavigationContainer onReady={onNavReady}>
          <Home />
        </NavigationContainer>
      </PersistQueryClientProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
