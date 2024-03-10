import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import Home from '../screens/Home';
import UserRepos from '../screens/UserRepos';

type MainNavigationProps = {};
const Stack = createNativeStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Home}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.UserRepos} component={UserRepos} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
