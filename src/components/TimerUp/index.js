import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TimerContext } from '../../context/timer';
import styles from './styles';

export const TimerUp = () => {
  const { seconds, setSeconds } = useContext(TimerContext);

  const [start, setStart] = useState(false);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (start) {
      if (restart) {
        setSeconds(0);
      } else {
        setTimeout(function () {
          setSeconds(seconds + 1);
        }, 1000);
      }
    }
  });

  function startTimer() {
    setStart(true);
  }

  function restartTimer() {
    setRestart(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {seconds + ' segundos'}</Text>
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
