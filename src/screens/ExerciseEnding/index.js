import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { createPatientForm } from '../../components/PatientForm';

import { Ionicons } from '@expo/vector-icons';
import { createForm } from '../../components/Form';

import styles from './styles';

export function ExerciseEnding(props) {
  const navigation = useNavigation();

  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState('');
  const [fatigue, setFatigue] = useState('');
  const [reps, setReps] = useState('');
  const [verify, setVerify] = useState('');

  const patientId = props.route.params[0];
  const exerciseOrExam = props.route.params[1];
  const id = props.route.params[2];

  var exam = false;

  if (exerciseOrExam.className == 'Exam') exam = true;

  async function handleSave() {
    const data = {
      frequency: frequency,
      saturation: saturation,
      dyspnea: dyspnea,
      fatigue: fatigue,
      reps: reps,
    };
    var formId = createForm(data);

    formId.then((response) => {
      if (response != false) {
        var patientPointer = {
          __type: 'Pointer',
          className: 'Patient',
          objectId: patientId,
        };

        var formPointer = {
          __type: 'Pointer',
          className: 'Form',
          objectId: response,
        };

        var receiverPointer = {
          __type: 'Pointer',
          className: exerciseOrExam.className,
          objectId: id,
        };

        createPatientForm(patientPointer, formPointer, receiverPointer).then(
          (response) => {
            setVerify(response);
          }
        );
      }
    });
    if (verify != false) {
      navigation.goBack();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset="-213"
      style={{ flex: 1, backgroundColor: '#3E9ACD' }}
    >
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Terminei'}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          {exam ? (
            <>
              <Text style={styles.inputName}>{'Número de repetições'}</Text>
              <TextInput
                style={styles.input}
                value={reps}
                placeholder={'digitar'}
                onChangeText={(text) => setReps(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </>
          ) : null}
          <Text style={styles.inputName}>{'Frequência Cardíaca'}</Text>
          <TextInput
            style={styles.input}
            value={frequency}
            placeholder={'digitar'}
            onChangeText={(text) => setFrequency(text)}
            keyboardType={'numeric'}
            maxLength={3}
          />
          <Text style={styles.inputName}>{'Saturação'}</Text>
          <TextInput
            style={styles.input}
            value={saturation}
            placeholder={'digitar'}
            onChangeText={(text) => setSaturation(text)}
            keyboardType={'numeric'}
            maxLength={3}
          />
          <Text style={styles.inputName}>{'Falta de Ar'}</Text>
          <TextInput
            style={styles.input}
            value={dyspnea}
            placeholder={'digitar'}
            onChangeText={(text) => setDyspnea(text)}
            keyboardType={'numeric'}
            maxLength={3}
          />
          <Text style={styles.inputName}>{'Cansaço'}</Text>
          <TextInput
            style={styles.input}
            value={fatigue}
            placeholder={'digitar'}
            onChangeText={(text) => setFatigue(text)}
            keyboardType={'numeric'}
            maxLength={3}
          />
          <TouchableOpacity onPress={() => handleSave()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Concluir'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
