import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/core';

import Parse from 'parse/react-native.js';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { createForm } from '../../components/Form';
import { createPatientForm } from '../../components/PatientForm';

export function ExerciseEnding(props) {
  const navigation = useNavigation();

  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState('');
  const [fatigue, setFatigue] = useState('');

  var patientId = props.route.params;

  function handleSave() {
    var formId = createForm(frequency, saturation, dyspnea, fatigue);

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

        var verify = createPatientForm(patientPointer, formPointer);
        if (verify) {
          navigation.goBack();
        }
      }
    });
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
          <Text style={styles.inputName}>{'Borg Dispineia'}</Text>
          <TextInput
            style={styles.input}
            value={dyspnea}
            placeholder={'digitar'}
            onChangeText={(text) => setDyspnea(text)}
            keyboardType={'numeric'}
            maxLength={3}
          />
          <Text style={styles.inputName}>{'Borg Fadiga'}</Text>
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
