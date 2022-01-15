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
