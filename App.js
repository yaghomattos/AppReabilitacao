import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { AuthContext } from './src/context/Auth';
import { TimerContext } from './src/context/Timer';
import { AuthRouter, FlowRouter } from './src/routes/app.routes';
import './src/services/firebase';

const App = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [customInterval, setCustomInterval] = useState('');
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <TimerContext.Provider
      value={{
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        customInterval,
        setCustomInterval,
      }}
    >
      <AuthContext.Provider value={{ isSignedIn, setSignedIn }}>
        {!isSignedIn ? <AuthRouter /> : <FlowRouter />}
      </AuthContext.Provider>
    </TimerContext.Provider>
  );
};

export default App;
