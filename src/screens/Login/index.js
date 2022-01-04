import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { readParticipant } from '../../components/CRUDs/Participant/index';
import styles from './styles';

export const Login = () => {
  const navigation = useNavigation();

  const [CPF, setCPF] = useState('');

  async function doUserLogIn() {
    var verify = '';

    await readParticipant(CPF).then((response) => {
      verify = response;
    });

    if (verify != undefined) {
      navigation.navigate('Home', verify);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset="-170"
      style={styles.keyboard}
    >
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Text style={styles.text_label}>App Reabilitação</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={CPF}
            placeholder={'CPF'}
            onChangeText={(text) => setCPF(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
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
