import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { CurrentDate } from '../../utils/CurrentDate';
import styles from './styles';

const HeaderDate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back"
        size={24}
        style={styles.back}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.separate}>
        <Text style={styles.header_text_bold}>{'Olá, Participante'}</Text>
        <Text style={styles.header_text}>{CurrentDate()}</Text>
      </View>
      <MaterialCommunityIcons
        name="bell"
        size={30}
        color="transparent"
        style={{ paddingRight: 25 }}
      />
    </View>
  );
};

export default HeaderDate;
