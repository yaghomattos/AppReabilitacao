import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';

import styles from './styles';

export function Home(props) {
  const patient = props.route.params;

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>
            {'Bem Vindo - '}
            <Text style={styles.header_text_bold}>{patient.get('name')}</Text>
          </Text>
        </View>
        <View style={styles.background}>
          <Button
            title="Treinamento"
            onPress="ListSelectExercises"
            props={patient.id}
          />
          <Button
            title="Avaliação"
            onPress="ListSelectExams"
            props={patient.id}
          />
          <Button title="Chat" onPress="Chat" props={patient.id} />
          <Button
            title="Monitoramento"
            onPress="Monitoring"
            props={patient.id}
          />
          <Button
            title="Educacional"
            onPress="Educational"
            props={patient.id}
          />
        </View>
        <Logout />
      </SafeAreaView>
    </>
  );
}
