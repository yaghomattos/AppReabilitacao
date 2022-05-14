import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TimerContext } from '../../context/Timer/index';
import styles from './styles';

export const TimerDown = ({ value }) => {
  const {
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    customInterval,
    setCustomInterval,
  } = useContext(TimerContext);

  useEffect(() => {
    setSeconds(value % 60);
    setMinutes(Math.floor(value / 60));
  }, []);

  function startTimer() {
    setCustomInterval(
      setInterval(() => {
        updateTimer();
      }, 1000)
    );
  }

  function restartTimer() {
    setMinutes(Math.floor(value / 60));
    setSeconds(value % 60);
  }

  function updateTimer() {
    setSeconds((prevState) => {
      if (prevState - 1 == 0 || prevState == 0) {
        setMinutes(minutes - 1);
        return 59;
      }
      return prevState - 1;
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
