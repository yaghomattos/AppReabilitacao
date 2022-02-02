import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { TimerContext } from './src/context/timer';
import { AppRoutes } from './src/routes/app.routes';
import './src/services/firebase';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <TimerContext.Provider value={{ seconds, setSeconds }}>
      <AppRoutes />
    </TimerContext.Provider>
  );
};

export default App;
