import 'react-native-gesture-handler';
import React from 'react';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppRoutes } from './src/routes/app.routes';

Parse.initialize(
  'jVBEFWgUK5YxoxjXUgcjL5724mZwD1Ylom1N3MFY',
  '1i2kKCxMmanTNisgig5y4SpkOl90VsjM75wcgosg'
);
Parse.serverURL = 'https://reabilitation.b4a.io/';
Parse.setAsyncStorage(AsyncStorage);
Parse.enableLocalDatastore();

const App = () => {
  return (
    <AppRoutes />
  );
};

export default App;
