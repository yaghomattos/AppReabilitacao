import 'react-native-gesture-handler';
import React from 'react';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppRoutes } from './src/routes/app.routes';

Parse.initialize(
  'mZ19CetKStaIV82Fqx1ZOgKc5HXs8cEuoY8B1igk',
  'X841DiHGWSe4Pac6DgbzQxt96xqMaXzcOZR4mhN1'
);
Parse.serverURL = 'https://reab.b4a.io/';
Parse.setAsyncStorage(AsyncStorage);
Parse.enableLocalDatastore();

const App = () => {
  return (
    <AppRoutes />
  );
};

export default App;
