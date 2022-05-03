import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import {
  LogBox,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { createPostForm } from '../../../components/CRUDs/Form/index';
import Header from '../../../components/Header';
import { TimerContext } from '../../../context/Timer';
import { database } from '../../../services/firebase';
import styles from './styles';

LogBox.ignoreLogs(['Setting a timer']);

export function FormEnding(props) {
  const navigation = useNavigation();

  const { value, setValue } = useContext(TimerContext);

  const [reps, setReps] = useState('');
  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState('');
  const [fatigue, setFatigue] = useState('');
  const [results, setResults] = useState('');
  const [reference, setReference] = useState('');

  const participant = props.route.params.participant;
  const exerciseOrTest = props.route.params.className;
  const id = props.route.params.id;

  useEffect(() => {
    var li = '';
    if (exerciseOrTest == 'test') {
      database
        .ref('selectTest')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            if (child.key == id) {
              li = {
                name: child.val().name,
                test: child.val().test,
                frequency: child.val().frequency,
                saturation: child.val().saturation,
                dyspnea: child.val().dyspnea,
                fatigue: child.val().fatigue,
                reps: child.val().reps,
                timer: child.val().timer,
                reference: child.val().reference,
              };
            }
          });
          setResults(li);
          setReference(results.reference);
        });
    } else {
      database
        .ref('selectExercise')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            if (child.key == id) {
              li = {
                name: child.val().name,
                exercise: child.val().exercise,
                frequency: child.val().frequency,
                saturation: child.val().saturation,
                dyspnea: child.val().dyspnea,
                fatigue: child.val().fatigue,
                reps: child.val().reps,
                timer: child.val().timer,
              };
            }
          });
          setResults(li);
        });
    }
  }, [results]);

  async function handleSave() {
    const data = {
      frequency: frequency,
      saturation: saturation,
      dyspnea: dyspnea,
      fatigue: fatigue,
      reps: reps,
      timer: value,
      participant: participant,
      className: exerciseOrTest,
      name: results.name,
      reference: reference,
    };

    createPostForm(data).then(() => {
      navigation.navigate('Home');
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Informações finais" />
      <ScrollView>
        <View style={styles.form}>
          {exerciseOrTest != 'test' ? null : results.reps != '' ? (
            results.timer != '' ? (
              <View style={styles.inputBox}>
                <Text style={styles.label}>{'Número de repetições'}</Text>
                <TextInput
                  style={styles.input}
                  value={reps}
                  onChangeText={(text) => setReps(text)}
                  keyboardType={'numeric'}
                  maxLength={3}
                />
              </View>
            ) : (
              <View style={styles.inputBox}>
                <Text style={styles.label}>{'Tempo'}</Text>
                <Text style={styles.label}>
                  {(Math.floor(value / 60) < 10
                    ? '0' + Math.floor(value / 60)
                    : Math.floor(value / 60)) +
                    ':' +
                    (value % 60 < 10 ? '0' + (value % 60) : value % 60)}
                </Text>
              </View>
            )
          ) : (
            <View style={styles.inputBox}>
              <Text style={styles.inputName}>{'Número de repetições'}</Text>
              <TextInput
                style={styles.input}
                value={reps}
                onChangeText={(text) => setReps(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </View>
          )}

          {results.frequency != false ? (
            <View style={styles.inputBox}>
              <Text style={styles.inputName}>{'Frequência Cardíaca'}</Text>
              <TextInput
                style={styles.input}
                value={frequency}
                onChangeText={(text) => setFrequency(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </View>
          ) : null}

          {results.saturation != false ? (
            <View style={styles.inputBox}>
              <Text style={styles.inputName}>{'Saturação'}</Text>
              <TextInput
                style={styles.input}
                value={saturation}
                onChangeText={(text) => setSaturation(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </View>
          ) : null}

          {results.dyspnea != false ? (
            <View style={styles.inputBox}>
              <Text style={styles.inputName}>{'Falta de Ar'}</Text>
              <TextInput
                style={styles.input}
                value={dyspnea}
                onChangeText={(text) => setDyspnea(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </View>
          ) : null}

          {results.fatigue != false ? (
            <View style={styles.inputBox}>
              <Text style={styles.inputName}>{'Cansaço'}</Text>
              <TextInput
                style={styles.input}
                value={fatigue}
                onChangeText={(text) => setFatigue(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </View>
          ) : null}

          <TouchableOpacity onPress={() => handleSave()}>
            <View style={styles.button}>
              <Feather name="check" size={24} color="#fefefe" />
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
