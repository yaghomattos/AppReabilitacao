import React from 'react';
import 'react-native-gesture-handler';
import { AppRoutes } from './src/routes/app.routes';
import './src/services/firebase';

const App = () => {
  return <AppRoutes />;
};

export default App;
