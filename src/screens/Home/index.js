import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import AuthContext from '../../components/AuthContext/index';

import styles from './styles';

export function Home(props) {
  const patient = props.route.params;

  return (
    <>
      <AuthContext.Provider value={{ id: patient }}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_text}>
              {'Bem Vindo - '}
              <Text style={styles.header_text_bold}>{patient.get('name')}</Text>
            </Text>
          </View>
          <View style={styles.background}>
            <Button title = "Exercícios" onPress="ListSelectExercises" props={patient.id}/>
            <Button title="Chat" onPress="Chat" props={patient.id} />
            <Button title="Monitoramento" onPress="Monitoring" props={patient.id}/>
          </View>
          <Logout />
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
}
