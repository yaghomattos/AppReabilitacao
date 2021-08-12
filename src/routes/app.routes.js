import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Chat } from '../screens/Chat/index';
import { Login } from '../screens/Login/index';
import { Home } from '../screens/Home/index';
import { ListSelectExercises } from '../screens/ListSelectExercises/index';
import { Player } from '../screens/Player/index';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ListSelectExercises" component={ListSelectExercises} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
