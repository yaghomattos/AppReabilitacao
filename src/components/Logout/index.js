import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

import Parse from 'parse/react-native';

import Styles from '../Styles';
import styles from './styles';

export const Logout = () => {
  const navigation = useNavigation();

  const userLogout = async function () {
    let currentUser = await Parse.User.currentAsync();
    await Parse.User.logOut()
      .then(async () => {
        currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Sucesso, Paciente deslogado !');
        }
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error in logout!', error.message);
        navigation.dispatch(StackActions.popToTop());
        return false;
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <TouchableOpacity onPress={() => userLogout()}>
          <View style={styles.button}>
            <Text style={styles.button_label}>{'Sair'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
