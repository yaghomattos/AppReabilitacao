import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../context/Auth';
import { auth } from '../../services/firebase';
import styles from './styles';

export const Logout = () => {
  const navigation = useNavigation();
  const { isSignedIn, setSignedIn } = useContext(AuthContext);

  const userLogout = async function () {
    auth
      .signOut()
      .then(() => {
        Alert.alert('Participante deslogado!');
        setSignedIn(false);
      })
      .catch(() => {
        Alert.alert('Erro ao deslogar!');
        setSignedIn(false);
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <TouchableOpacity onPress={() => userLogout()}>
          <View style={styles.button}>
            <MaterialIcons name="logout" size={24} color="#fefefe" />
            <Text style={styles.button_label}>{'Sair'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
