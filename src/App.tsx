import 'react-native-gesture-handler';
import 'react-native-devsettings';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import appQueryClient, {asyncStoragePersister} from './config/appQueryClient';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './navigation/MainNavigation';

type AppProps = {};

const App: FC<AppProps> = ({}) => {
  const onNavReady = () => {
    RNBootSplash.hide({fade: true});
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer onReady={onNavReady}>
        <PersistQueryClientProvider
          client={appQueryClient}
          persistOptions={{
            persister: asyncStoragePersister,
          }}>
          <MainNavigation />
        </PersistQueryClientProvider>
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
