import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button } from '../../components/Button/index';
import { readParticipant } from '../../components/CRUDs/Participant/index';
import { Logout } from '../../components/Logout/index';
import styles from './styles';

export function Home(props) {
  const cpf = props.route.params;

  const [participant, setParticipant] = useState('');

  useEffect(() => {
    readParticipant(cpf).then((response) => {
      setParticipant(response);
    });
  }, []);

  return (
    <>
      <StatusBar />
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
          <Button
            title="Monitoramento"
            onPress="Monitoring"
            props={participant.key}
          />
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
