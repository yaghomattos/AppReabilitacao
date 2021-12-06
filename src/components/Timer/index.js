import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [actual, setActual] = useState(50);
  const [check, setCheck] = useState(false);

  function decrementTime() {
    setSeconds(actual - 1);
    return seconds;
  }

  useEffect(() => {
    function update() {
      setActual(() => decrementTime(), 1000);
    }
    if (seconds > 0) update();
  }, [seconds]);

  function startTimer() {
    console.log('start');
    setSeconds(50);
  }

  function pauseTimer() {
    console.log('pause');
    setSeconds(0);
    setActual(seconds);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {actual + ' segundos'}</Text>
      <View style={styles.buttons}>
        <Ionicons
          name="play-outline"
          size={24}
          style={styles.icons}
          onPress={() => startTimer()}
        />
        <Ionicons
          name="pause-outline"
          size={24}
          style={styles.icons}
          onPress={() => pauseTimer()}
        />
      </View>
    </View>
  );
};
