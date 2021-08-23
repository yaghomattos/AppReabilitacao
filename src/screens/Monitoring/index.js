import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

export function Monitoring() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.date}>{'6 de ago, 2021'}</Text>
        </View>
        <View style={styles.today}>
          <Text style={styles.title}>{'Feito Hoje'}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.exerciseBox}>
          <Text style={styles.subTitle}>{'Exercícios:'}</Text>
          <View style={styles.exerciseContainer}>
            <Text style={styles.description}>
              {
                'Exercício 1 - Inspire profundamente elevando os braços até a altura dos ombros, em seguida expire lentamente abaixando-os.'
              }
            </Text>
          </View>
          <View style={styles.exerciseContainer}>
            <Text style={styles.description}>
              {
                'Exercício 2 - Em pé, com as mãos apoiadas na cama, fique na ponta dos pés e volte à posição original.'
              }
            </Text>
          </View>
          <View style={styles.exerciseContainer}>
            <Text style={styles.description}>
              {
                'Exercício 3 - Sentado em uma cadeira, relaxe os ombros, com as mãos na barriga, respire lentamente e profundamente.'
              }
            </Text>
          </View>
          <View>
            <Text style={styles.subTitle}>{'Quantidade:'}</Text>
            <View>
              <Text style={styles.feedback}>
                {'3 de 3 exercícios concluídos'}
              </Text>
            </View>
            <Text style={styles.subTitle}>{'Produtividade:'}</Text>
            <View>
              <Text style={styles.feedback}>{'Excelente'}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
