import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.backView}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header_text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
