import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Chat } from './src/screens/Chat';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';
import { Monitoring } from './src/screens/Monitoring';
import { ListSelectExercises } from './src/screens/ListSelectExercises';
import { Player } from './src/screens/Player';

Parse.initialize(
  'mZ19CetKStaIV82Fqx1ZOgKc5HXs8cEuoY8B1igk',
  'X841DiHGWSe4Pac6DgbzQxt96xqMaXzcOZR4mhN1'
);
Parse.serverURL = 'https://reab.b4a.io/';
Parse.setAsyncStorage(AsyncStorage);
Parse.enableLocalDatastore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ListSelectExercises" component={ListSelectExercises} />
        <Stack.Screen name="Monitoring" component={Monitoring} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
