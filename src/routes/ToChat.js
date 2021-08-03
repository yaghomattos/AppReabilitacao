import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from '../components/Styles';

export const ToChat = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Chat'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
