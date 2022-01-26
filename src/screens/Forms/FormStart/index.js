import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  LogBox,
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

  const [verify, setVerify] = useState(false);
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
      database.ref('selectExercise').on('value', (snapshot) => {
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
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset="-213"
      style={{ flex: 1, backgroundColor: '#3E9ACD' }}
    >
      <Header title="Informações inicias" />
      <View style={styles.container}>
        <View style={styles.form}>
          {results.frequency != false ? (
            <>
              <Text style={styles.inputName}>{'Frequência Cardíaca'}</Text>
              <TextInput
                style={styles.input}
                value={frequency}
                placeholder={'digitar'}
                onChangeText={(text) => setFrequency(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </>
          ) : null}

          {results.saturation != false ? (
            <>
              <Text style={styles.inputName}>{'Saturação'}</Text>
              <TextInput
                style={styles.input}
                value={saturation}
                placeholder={'digitar'}
                onChangeText={(text) => setSaturation(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </>
          ) : null}

          {results.dyspnea != false ? (
            <>
              <Text style={styles.inputName}>{'Falta de Ar'}</Text>
              <TextInput
                style={styles.input}
                value={dyspnea}
                placeholder={'digitar'}
                onChangeText={(text) => setDyspnea(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </>
          ) : null}

          {results.fatigue != false ? (
            <>
              <Text style={styles.inputName}>{'Cansaço'}</Text>
              <TextInput
                style={styles.input}
                value={fatigue}
                placeholder={'digitar'}
                onChangeText={(text) => setFatigue(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </>
          ) : null}

          <TouchableOpacity onPress={() => handleSave()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Continuar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
