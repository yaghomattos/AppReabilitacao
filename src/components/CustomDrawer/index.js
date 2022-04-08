import {
  Feather,
  Foundation,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { auth, database } from '../../services/firebase';
import styles from './styles';

export const CustomDrawer = () => {
  const navigation = useNavigation();

  const [participant, setParticipant] = useState('');

  const user = auth.currentUser;
  var cpf = '';

  if (user !== null) {
    cpf = user.displayName;
  }

  useEffect(() => {
    database
      .ref('participant')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().cpf == cpf) {
            setParticipant({
              address: child.val().address,
              age: child.val().age,
              cpf: child.val().cpf,
              diagnosis: child.val().diagnosis,
              name: child.val().name,
              phone: child.val().phone,
              user: child.val().user,
              height: child.val().height,
              weight: child.val().weight,
              id: child.key,
            });
          }
        });
      });
  }, []);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Drawer');
        }}
      >
        <View style={styles.button}>
          <Ionicons name="home" size={24} color="#000" />
          <Text style={styles.button_label}>{'Início'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListSelectExercise', participant)}
      >
        <View style={styles.button}>
          <MaterialIcons name="directions-walk" size={24} color="#000" />
          <Text style={styles.button_label}>{'Treinamento'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListSelectTest', participant)}
      >
        <View style={styles.button}>
          <Foundation name={'clipboard-pencil'} size={24} color="black" />
          <Text style={styles.button_label}>{'Avaliação'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListParticipants', participant)}
      >
        <View style={styles.button}>
          <Feather name="users" size={24} color="black" />
          <Text style={styles.button_label}>{'Participantes'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Educational', participant)}
      >
        <View style={styles.button}>
          <Feather name="book-open" size={24} color="black" />
          <Text style={styles.button_label}>{'Educacional'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', participant)}
      >
        <View style={styles.button}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Text style={styles.button_label}>{'Chat'}</Text>
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity>
        <View style={styles.text}>
          <Text style={styles.text_label}>{'Termos de uso'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.text}>
          <Text style={styles.text_label}>{'Política de privacidade'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
