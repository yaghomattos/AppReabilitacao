import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { readParticipant } from '../../components/CRUDs/Participant/index';
import { auth } from '../../services/firebase';
import styles from './styles';

export const Login = () => {
  const [CPF, setCPF] = useState('');
  const [user, setUser] = useState('');

  const navigation = useNavigation();

  const connectServer = async function () {
    setUser(`${CPF}@participant.com`);
    const password = '123456';

    auth
      .signInWithEmailAndPassword(user, password)
      .then((user) => {
        navigation.navigate('Home');
      })
      .catch(() => {
        Alert.alert('Email/Senha inválidos');
      });
  };

  async function doUserLogIn() {
    connectServer();
    var verify = false;
    await readParticipant(CPF).then((response) => {
      verify = response;
    });
    if (verify !== false) {
      navigation.navigate('Home', verify);
    } else Alert.alert('Usuário não encontrado');
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
