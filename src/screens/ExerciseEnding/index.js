import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/core';

import Parse from 'parse/react-native.js';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { createForm } from '../../components/Form';
import { createPatientForm } from '../../components/PatientForm';

export function ExerciseEnding(props) {
  var patientId = props.route.params;

  const navigation = useNavigation();

  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState(0);
  const [fatigue, setFatigue] = useState(0);

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
    })
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Formulário'}</Text>
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
          <Text style={styles.sliderPosition}>{dyspnea}</Text>
          <Slider
            style={{ width: 200, height: 20 }}
            value={dyspnea}
            onValueChange={setDyspnea}
            maximumValue={6}
            minimumValue={0}
            step={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text style={styles.inputName}>{'Borg Fadiga'}</Text>
          <Text style={styles.sliderPosition}>{fatigue}</Text>
          <Slider
            style={{ width: 200, height: 20 }}
            value={fatigue}
            onValueChange={setFatigue}
            maximumValue={6}
            minimumValue={0}
            step={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <TouchableOpacity onPress={() => handleSave()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Concluir'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
