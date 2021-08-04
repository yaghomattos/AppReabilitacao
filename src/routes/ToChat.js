import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from '../components/Styles';
import AuthContext from '../components/context/auth';

export const ToChat = () => {
  const navigation = useNavigation();

  const { id } = useContext(AuthContext);

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', id)}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Chat'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
