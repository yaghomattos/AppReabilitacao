import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Chat } from './src/screens/Chat';
import { LoginPatient } from './src/components/PatientLogin';
import { Home } from './src/screens/Home';
import { Monitoring } from './src/screens/Monitoring';
import { ListSelectExercises } from './src/screens/ListSelectExercises';

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://reabilitacao.b4a.io/';
Parse.initialize(
  'm0GlXlzavxfoYkdEfQOfcvg3P57xCrcQDhTwJ0O8',
  'fKv7jVaceov8sgadLXeGa6HFpPS3UrUOrpCyAhjw'
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPatient" component={LoginPatient} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListSelectExercises" component={ListSelectExercises} />
        <Stack.Screen name="Monitoring" component={Monitoring} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
