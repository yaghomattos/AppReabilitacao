import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Parse from 'parse/react-native';

import { readPatient } from '../../components/Patient/index';

import Styles from '../../components/Styles';

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
      console.log(response)
      verify = response;
    });
    if (verify !== false) {
      navigation.navigate('Home', verify);
    } else Alert.alert('Usuário não encontrado');
  }

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={CPF}
          placeholder={'CPF'}
          onChangeText={(text) => setCPF(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => doUserLogIn()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Entrar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
