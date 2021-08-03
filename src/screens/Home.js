import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { ToChat } from '../routes/ToChat';
import { ToListSelectExercises } from '../routes/ToListSelectExercises';
import { ToMonitoring } from '../routes/ToMonitoring';

import Styles from '../components/Styles';

export function Home() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>{'AppReabilitação - '}</Text>
            {'Paciente'}
          </Text>
        </View>
        <ToListSelectExercises />
        <ToMonitoring />
        <ToChat />
      </SafeAreaView>
    </>
  );
}
