import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  LogBox,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { createPreForm } from '../../../components/CRUDs/Form/index';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

LogBox.ignoreLogs(['Setting a timer']);

export function FormStart(props) {
  const navigation = useNavigation();

  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState('');
  const [fatigue, setFatigue] = useState('');
  const [results, setResults] = useState('');

  const participant = props.route.params.participant;
  const exerciseOrTest = props.route.params.className;
  const id = props.route.params.id;

  const propertys = props.route.params;

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
              };
            }
          });
          setResults(li);
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
      participant: participant,
      className: exerciseOrTest,
      name: results.name,
    };

    createPreForm(data).then(() => {
      navigation.navigate('Player', propertys);
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Informações inicias" />
      <ScrollView>
        <View style={styles.form}>
          {results.frequency != false ? (
            <View style={styles.inputBox}>
              <Text style={styles.label}>{'Frequência Cardíaca'}</Text>
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
              <Text style={styles.label}>{'Saturação'}</Text>
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
              <Text style={styles.label}>{'Falta de Ar'}</Text>
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
              <Text style={styles.label}>{'Cansaço'}</Text>
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
