import 'react-native-gesture-handler';
import React from 'react';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppRoutes } from './src/routes/app.routes';

Parse.initialize(
  'DlDuXTrOQAoLKh6uXuibPpbADVFTwA3j97lEZj4o',
  'TlnnvFvI6d6LCmF0gAMlRIMPnSxuvrZUOhhockxz'
);
Parse.serverURL = 'https://reabilitation.b4a.io/';
Parse.setAsyncStorage(AsyncStorage);
Parse.enableLocalDatastore();

const App = () => {
  return <AppRoutes />;
};

export default App;
