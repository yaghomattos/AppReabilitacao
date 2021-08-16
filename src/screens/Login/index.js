import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Parse from 'parse/react-native';

import { readPatient } from '../../components/Patient/index';

import styles from './styles';

export const Login = () => {
  var user = Parse.User.logIn('1', '1').catch(function (error) {
    console.log('Error: ' + error.code + ' ' + error.message);
  });
  Parse.User._clearCache();

  const [CPF, setCPF] = useState('');

  const navigation = useNavigation();

  async function doUserLogIn() {
    var verify = false;
    await readPatient(CPF).then((response) => {
      verify = response;
    });
    if (verify !== false) {
      navigation.navigate('Home', verify);
    } else Alert.alert('Usuário não encontrado');
  }

  return (
    <KeyboardAvoidingView behavior={'height'} style={styles.keyboard}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Text style={styles.text_label}>Logo</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={CPF}
            placeholder={'CPF'}
            onChangeText={(text) => setCPF(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TouchableOpacity onPress={() => doUserLogIn()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Entrar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
