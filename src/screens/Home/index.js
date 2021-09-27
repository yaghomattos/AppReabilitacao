import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import AuthContext from '../../components/AuthContext/index';

import styles from './styles';

export function Home(props) {
  const patientId = props.route.params;

  return (
    <>
      <AuthContext.Provider value={{ id: patientId }}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_text}>
              {'Bem Vindo - '}
              <Text style={styles.header_text_bold}>{patientId.get('name')}</Text>
            </Text>
          </View>
          <View style={styles.background}>
            <Button title = "Exercícios" onPress="ListSelectExercises" props={patientId.id}/>
            <Button title="Chat" onPress="Chat" props={patientId.id} />
            <Button title="Monitoramento" onPress="Monitoring" />
          </View>
          <Logout />
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
}
