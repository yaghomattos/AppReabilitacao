import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Parse from 'parse/react-native';

import Styles from './Styles';

export const LoginPatient = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  //Fetch Patiente
  async function fetchPatient() {
    const usernameValue = username;
    let query = new Parse.Query('Patient');
    query.equalTo('name', usernameValue);
    try {
      const queryResults = await query.find();
      // for (let result of queryResults) {
      //   console.log('name: ', result.get('name'));
      // }
      //console.log('query', queryResults[0].id);
      if (queryResults[0].id != undefined) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  async function doUserLogIn() {
    if (await fetchPatient()) {
      navigation.navigate('HomePatient');
    } else Alert.alert('Error ! User not found');
  }

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Usuário'}
          onChangeText={(text) => setUsername(text)}
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
