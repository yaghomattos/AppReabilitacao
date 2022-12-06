import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CustomDrawer } from '../components/CustomDrawer/index';
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

const AuthStack = createStackNavigator();
const FlowStack = createStackNavigator();

const Drawer = createDrawerNavigator();

export function AuthRouter() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export function FlowRouter() {
  return (
    <NavigationContainer>
      <FlowStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Drawer"
      >
        <FlowStack.Screen name="Home" component={Home} />
        <FlowStack.Screen name="Chat" component={Chat} />
        <FlowStack.Screen name="Educational" component={Educational} />
        <FlowStack.Screen
          name="ListSelectExercise"
          component={ListSelectExercise}
        />
        <FlowStack.Screen name="ListSelectTest" component={ListSelectTest} />
        <FlowStack.Screen name="Player" component={Player} />
        <FlowStack.Screen name="Monitoring" component={Monitoring} />
        <FlowStack.Screen name="FormEnding" component={FormEnding} />
        <FlowStack.Screen name="FormStart" component={FormStart} />
        <FlowStack.Screen name="Orientation" component={Orientation} />
        <FlowStack.Screen name="Drawer" component={MenuDrawer} />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
}

function MenuDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fefefe',
          width: '60%',
        },
        headerStyle: {
          backgroundColor: '#76BCAA',
        },
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="App Reabilitação" component={Home} />
    </Drawer.Navigator>
  );
}
