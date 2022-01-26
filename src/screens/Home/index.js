import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import { database } from '../../services/firebase';
import styles from './styles';

export function Home(props) {
  const cpf = props.route.params;

  const [participant, setParticipant] = useState('');

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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3E9ACD" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>
            {'Bem Vindo - '}
            <Text style={styles.header_text_bold}>{participant.name}</Text>
          </Text>
        </View>
        <View style={styles.background}>
          <Button
            title="Treinamento"
            onPress="ListSelectExercise"
            props={participant}
          />
          <Button
            title="Avaliação"
            onPress="ListSelectTest"
            props={participant}
          />
          <Button title="Chat" onPress="Chat" props={participant} />
          {/* <Button
            title="Monitoramento"
            onPress="Monitoring"
            props={participant.key}
          /> */}
          <Button
            title="Educacional"
            onPress="Educational"
            props={participant}
          />
        </View>
        <Logout />
      </SafeAreaView>
    </>
  );
}
