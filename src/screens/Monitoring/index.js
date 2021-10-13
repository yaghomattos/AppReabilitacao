import React from 'react';
import { SafeAreaView, StatusBar, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { Ionicons } from '@expo/vector-icons';
import { List, Divider } from 'react-native-paper';

import styles from './styles';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.ascending('createdAt');

var exercise = '';
var totalExercise = 0;

async function Search(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  var results = await parseQuery.find();
  totalExercise = results.length;

  const query = new Parse.Query('SelectExercises');
  query.ascending('createdAt');
  query.equalTo('check', true);

  var result = await query.find();
  exercise = result;
}

function CaseBad() {
  return 'Ruim';
}

function CaseOkay() {
  return 'Bom';
}

function CaseGreat() {
  return 'Excelente';
}

function Productivy(props) {
  const percent = props;
  if (percent <= 0.34) return <CaseBad />;
  else if (percent > 0.33 && percent <= 0.67) return <CaseOkay />;
  else return <CaseGreat />;
}

function CurrentDate() {
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  var monName;
  monName = new Array(
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'Maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  );

  return date + ' de ' + monName[month] + ', ' + year;
}

export function Monitoring(props) {
  const navigation = useNavigation();

  const results = useParseQuery(parseQuery).results;

  const patientId = props.route.params;

  Search(patientId);

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
          <Text style={styles.date}>{CurrentDate()}</Text>
        </View>
        <View style={styles.today}>
          <Text style={styles.title}>{'Feito Hoje'}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.exerciseBox}>
          <Text style={styles.subTitle}>{'Exercícios:'}</Text>
          <View style={styles.exerciseContainer}>
            <FlatList
              data={exercise}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <List.Item
                  style={styles.item}
                  title={item.get('exercise').get('name')}
                  titleNumberOfLines={1}
                  titleStyle={styles.description}
                  description={item.get('exercise').get('description')}
                  descriptionNumberOfLines={5}
                  descriptionStyle={styles.description}
                />
              )}
            />
          </View>
          <View>
            <Text style={styles.subTitle}>{'Quantidade:'}</Text>
            <View>
              <Text style={styles.feedback}>
                {' '}
                {exercise.length + ` de ${totalExercise} exercícios concluídos`}
              </Text>
            </View>
            <Text style={styles.subTitle}>{'Produtividade:'}</Text>
            <View>
              <Text style={styles.feedback}>
                {Productivy(exercise.length / totalExercise)}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
