import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import Home from '../screens/Home/Home';

type MainNavigationProps = {};
const Stack = createStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
