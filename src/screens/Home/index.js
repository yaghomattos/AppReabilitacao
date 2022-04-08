import {
  Feather,
  Foundation,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { Logout } from '../../components/Logout/index';
import { auth, database } from '../../services/firebase';
import styles from './styles';

export function Home() {
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
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor="#76BCAA" />
        <View style={styles.welcome}>
          <Text style={styles.welcome_text}>
            {'Olá, '}
            <Text style={styles.welcome_text_bold}>{participant.name}</Text>
          </Text>
        </View>
        <View style={styles.alignDivider}>
          <Divider style={styles.divider} />
        </View>
        <View style={styles.background}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListSelectExercise', participant)
              }
            >
              <View style={styles.button}>
                <MaterialIcons
                  name={'directions-walk'}
                  size={24}
                  color="black"
                />
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
          </View>

          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat', participant)}
            >
              <View style={styles.button}>
                <Ionicons name="chatbox-outline" size={24} color="black" />
                <Text style={styles.button_label}>{'Chat'}</Text>
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
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Monitoring', participant)}
            >
              <View style={styles.button}>
                <Feather name="activity" size={24} color="black" />
                <Text style={styles.button_label}>{'Monitoramento'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.fake_button}></View>
            </TouchableOpacity>
          </View>
          <Logout />
        </View>
      </ScrollView>
    </View>
  );
}
