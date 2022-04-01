import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TimerContext } from '../../context/timer';
import styles from './styles';

export const TimerUp = () => {
  const { value, setValue } = useContext(TimerContext);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [customInterval, setCustomInterval] = useState('');

  function startTimer() {
    setCustomInterval(
      setInterval(() => {
        updateTimer();
      }, 1000)
    );
  }

  function restartTimer() {
    setMinutes(0);
    setSeconds(0);
  }

  function updateTimer() {
    setValue(prevState);
    setSeconds((prevState) => {
      if (prevState + 1 == 60) setMinutes(minutes + 1);
      return prevState + 1;
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            startTimer();
          }}
        >
          <View style={styles.buttons}>
            <Ionicons name="play-outline" size={24} style={styles.icons} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            restartTimer();
          }}
        >
          <View style={styles.buttons}>
            <Ionicons name="refresh-outline" size={24} style={styles.icons} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
