import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from '../Styles';

export function Button({ title, onPress, props }) {
  const navigation = useNavigation();

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate(onPress, props)}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
