import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Chat } from '../screens/Chat/index';
import { Educational } from '../screens/Educational/index';
import { FormEnding } from '../screens/Forms/FormEnding/index';
import { FormStart } from '../screens/Forms/FormStart/index';
import { Home } from '../screens/Home/index';
import { ListSelectExercise } from '../screens/ListSelectExercise/index';
import { ListSelectTest } from '../screens/ListSelectTest/index';
import { Login } from '../screens/Login/index';
import { Monitoring } from '../screens/Monitoring/index';
import { Orientation } from '../screens/Orientation/index';
import { Player } from '../screens/Player/index';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Educational" component={Educational} />
        <Stack.Screen
          name="ListSelectExercise"
          component={ListSelectExercise}
        />
        <Stack.Screen name="ListSelectTest" component={ListSelectTest} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Monitoring" component={Monitoring} />
        <Stack.Screen name="FormEnding" component={FormEnding} />
        <Stack.Screen name="FormStart" component={FormStart} />
        <Stack.Screen name="Orientation" component={Orientation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
