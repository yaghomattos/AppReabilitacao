import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { auth } from '../../services/firebase';
import styles from './styles';

export const Login = () => {
  const navigation = useNavigation();

  const [CPF, setCPF] = useState('');

  async function doUserLogIn() {
    auth
      .signInWithEmailAndPassword(`${CPF}@participant.com`, '123456')
      .then((user) => {
        navigation.navigate('Home', CPF);
      })
      .catch(() => {
        Alert.alert('CPF inválido');
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset="-170"
      style={styles.keyboard}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#0065A4" />
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Text style={styles.text_label}>App Reabilitação</Text>
        </View>
        <View style={styles.form}>
          <TextInputMask
            style={styles.input}
            type={'cpf'}
            placeholder={'CPF'}
            value={CPF}
            onChangeText={(text) => setCPF(text)}
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
