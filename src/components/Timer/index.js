import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [actual, setActual] = useState(0);

  function decrementTime() {
    setSeconds(seconds - 1);
  }

  useEffect(() => {
    function update() {
      setSeconds(() => decrement(), 1000);
    }
    if (seconds > 0) update();
  }, []);

  function startTimer() {
    setSeconds(props.time);
    setActual(seconds);
  }

  function pauseTimer() {
    setActual(seconds);
    setSeconds(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{(actual, 'segundos')}</Text>
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
