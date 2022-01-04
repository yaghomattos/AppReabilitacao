import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';
import React, { useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { createForm } from '../../../components/CRUDs/Form';
import { createParticipantForm } from '../../../components/CRUDs/ParticipantForm';
import styles from './styles';

var results = '';

const parseQuery = new Parse.Query('SelectTest');
parseQuery.descending('createdAt');

export function FormEnding(props) {
  const navigation = useNavigation();

  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState('');
  const [fatigue, setFatigue] = useState('');
  const [reps, setReps] = useState('');
  const [verify, setVerify] = useState('');

  const [metric1, setMetric1] = useState(false);
  const [metric2, setMetric2] = useState(false);
  const [metric3, setMetric3] = useState(false);
  const [metric4, setMetric4] = useState(false);
  const [metric5, setMetric5] = useState(false);
  const [metric6, setMetric6] = useState(false);

  const participantId = props.route.params[0];
  const exerciseOrExam = props.route.params[1];
  const id = props.route.params[2];

  var exam = false;
  var result = '';

  async function Search() {
    results = useParseQuery(parseQuery).results;
    Parse.User._clearCache();
  }

  if (exerciseOrExam.className == 'Exam') {
    exam = true;

    var currentExam = {
      __type: 'Pointer',
      className: 'Exam',
      objectId: exerciseOrExam.id,
    };

    parseQuery.equalTo('exam', currentExam);
    parseQuery.find();

    useCallback(() => {
      Search();
      if (results[0].get('frequency')) setMetric1(true);
      if (results[0].get('saturation')) setMetric2(true);
      if (results[0].get('dyspnea')) setMetric3(true);
      if (results[0].get('fatique')) setMetric4(true);
      if (results[0].get('reps')) setMetric5(true);
      if (results[0].get('')) setMetric6(true);
    }, [results]);
  }

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
        var participantPointer = {
          __type: 'Pointer',
          className: 'Participant',
          objectId: participantId,
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

        createParticipantForm(
          participantPointer,
          formPointer,
          receiverPointer
        ).then((response) => {
          setVerify(response);
        });
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
          <Text style={styles.header_text}>{'Informações finais'}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          {!metric5 ? (
            metric6 ? (
              <>
                <Text style={styles.inputName}>{'Parametro'}</Text>
                <TextInput
                  style={styles.input}
                  value={reps}
                  placeholder={'digitar'}
                  onChangeText={(text) => setReps(text)}
                  keyboardType={'numeric'}
                  maxLength={3}
                />
              </>
            ) : (
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
            )
          ) : null}

          {!metric1 ? (
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

          {metric2 ? (
            <>
              <Text style={styles.inputName}>{'Saturação'}</Text>
              <TextInput
                style={styles.input}
                value={saturation}
                placeholder={'digitar'}
                onChangeText={(text) => setSaturation(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />{' '}
            </>
          ) : null}

          {metric3 ? (
            <>
              <Text style={styles.inputName}>{'Falta de Ar'}</Text>
              <TextInput
                style={styles.input}
                value={dyspnea}
                placeholder={'digitar'}
                onChangeText={(text) => setDyspnea(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />{' '}
            </>
          ) : null}

          {metric4 ? (
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
              <Text style={styles.text_label}>{'Concluir'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
