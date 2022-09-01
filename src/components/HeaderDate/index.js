import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { CurrentDate } from '../../utils/CurrentDate';
import styles from './styles';

const HeaderDate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={24} color="transparent" />
      <View style={styles.separate}>
        <Text style={styles.header_text_bold}>{'Olá, Participante'}</Text>
        <Text style={styles.header_text}>{CurrentDate()}</Text>
      </View>
      <Ionicons
        name="home"
        size={24}
        style={styles.back}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Drawer',
              },
            ],
          })
        }
      />
    </View>
  );
};

export default HeaderDate;
