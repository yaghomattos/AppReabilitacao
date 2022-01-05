import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
import { Timer } from '../../components/Timer/index';
import styles from './styles';

export function Player(props) {
  const navigation = useNavigation();

  const [test, setTest] = useState(false);

  const propertys = props.route.params;

  const name = props.route.params.name;
  const video = props.route.params.video;
  const sets = '';
  const numReps = props.route.params.numReps;
  const timer = props.route.params.timer;
  const id = props.route.params.id;
  const className = props.route.params.className;

  useEffect(() => {
    if (className == 'test') setTest(true);
    else sets = props.route.params.sets;
  }, []);

  async function Check() {
    if (test) {
      updateSelectTest(id);
    } else {
      updateSelectExercise(id);
    }
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.videoBox}>
          <Image source={{ uri: video }} style={styles.videoItem} />
        </View>
        <View style={styles.description}>
          <Text style={styles.paramsTitle}>
            {test ? 'Cronômetro:' : sets != '' ? 'Séries:' : 'Cronômetro:'}
          </Text>
          <View style={sets != '' ? styles.timer : styles.paramsBox2}>
            {test ? (
              sets != '' ? (
                <Timer time={sets} />
              ) : (
                <Text style={styles.params}>{timer + ' segundos'}</Text>
              )
            ) : sets != '' ? (
              <Text>{sets}</Text>
            ) : (
              <Text style={styles.params}>{timer + ' segundos'}</Text>
            )}
          </View>
          <Text style={styles.paramsTitle}>
            {test ? null : sets != '' ? 'Repetições:' : ''}
          </Text>
          <View style={test ? null : sets != '' ? styles.paramsBox : ''}>
            <Text style={styles.params}>
              {test ? (sets != '' ? '' : numReps) : null}
            </Text>
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
