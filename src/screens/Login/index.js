import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <StatusBar barStyle="dark-content" backgroundColor="#76BCAA" />
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon.png')}
            />
            <Text style={styles.name}>{'App Reabilitação'}</Text>
          </View>
          <View style={styles.form}>
            <Ionicons name="person" size={24} color="black" />
            <TextInputMask
              style={styles.input}
              type={'cpf'}
              placeholder={'CPF'}
              value={CPF}
              onChangeText={(text) => setCPF(text)}
            />
          </View>
          <TouchableOpacity onPress={() => doUserLogIn()}>
            <View style={styles.button}>
              <MaterialIcons name="login" size={24} color="#fefefe" />
              <Text style={styles.text_label}>{'Entrar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
