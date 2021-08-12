import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import AuthContext from '../../components/AuthContext/index';

import Styles from '../../components/Styles';

export function Home(id) {
  const patientId = id.route.params;
  
  return (
    <>
      <AuthContext.Provider value={{id: patientId}}>
        <StatusBar />
        <SafeAreaView style={Styles.login_container}>
          <View style={Styles.login_header}>
            <Text style={Styles.login_header_text}>
              <Text style={Styles.login_header_text_bold}>
                {'AppReabilitação - '}
              </Text>
              {'Paciente'}
            </Text>
          </View>
          <Button title = "Exercícios" onPress="ListSelectExercises" props={patientId}/>
          <Button title="Chat" onPress="Chat" />
          <Logout />
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
}
