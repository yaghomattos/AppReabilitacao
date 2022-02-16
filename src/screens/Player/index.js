import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { updateSelectExercise } from '../../components/CRUDs/SelectExercise/index';
import { updateSelectTest } from '../../components/CRUDs/SelectTest/index';
import Header from '../../components/Header';
import { TimerDown } from '../../components/TimerDown/index';
import { TimerUp } from '../../components/TimerUp/index';
import { TimerContext } from '../../context/timer';
import styles from './styles';

export function Player(props) {
  const navigation = useNavigation();

  const { seconds, setSeconds } = useContext(TimerContext);

  const [test, setTest] = useState(false);
  const [enable, setEnable] = useState(true);
  const [sets, setSets] = useState('');

  const propertys = props.route.params;

  const name = props.route.params.name;
  const video = props.route.params.video;
  const reps = props.route.params.reps;
  const timer = props.route.params.timer;
  const id = props.route.params.id;
  const className = props.route.params.className;

  useEffect(() => {
    if (className == 'test') setTest(true);
    else setSets(props.route.params.sets);

    if (timer != '') setSeconds(timer);
    else setSeconds(0);
  }, []);

  async function Check() {
    if (test) {
      updateSelectTest(id);
    } else {
      updateSelectExercise(id);
    }
    setEnable(false);
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Header title={name} />
        <View style={styles.videoBox}>
          <Image source={{ uri: video }} style={styles.videoItem} />
        </View>
        <View style={styles.description}>
          <Text style={styles.paramsTitle}>
            {test
              ? reps != ''
                ? 'Repetições'
                : 'Cronômetro:'
              : sets == ''
              ? ''
              : 'Séries:'}
          </Text>
          <View style={sets != '' ? styles.timer : styles.paramsBox2}>
            {test ? (
              reps != '' ? (
                <Text style={styles.params}>{reps}</Text>
              ) : (
                enable && <TimerDown value={timer} />
              )
            ) : sets == '' ? (
              timer == '' ? null : (
                enable && <TimerDown value={timer} />
              )
            ) : (
              <Text style={styles.params}>{sets}</Text>
            )}
          </View>
          <Text style={styles.paramsTitle}>
            {test && reps != ''
              ? 'Cronômetro'
              : sets != ''
              ? 'Repetições:'
              : ''}
          </Text>
          <View style={test ? null : sets != '' ? styles.paramsBox : ''}>
            {test && reps != '' ? (
              enable && <TimerUp />
            ) : (
              <Text style={styles.params}>{sets == '' ? '' : reps}</Text>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              Check();
              navigation.navigate('FormEnding', propertys);
            }}
          >
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Terminei'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
