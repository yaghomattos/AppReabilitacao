import React from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.ascending('createdAt');

var exercise = '';

async function Search(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  const results = await parseQuery.find();

  exercise = results;
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

export const ListSelectExercises = (props) => {
  const navigation = useNavigation();

  const patient = props.route.params;

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  Search(patient);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.separate}>
          <Text style={styles.header_text_bold}>{'Olá, Participante'}</Text>
          <Text style={styles.header_text}>{CurrentDate()}</Text>
        </View>
        <MaterialCommunityIcons
          name="bell"
          size={30}
          color="transparent"
          style={{ paddingRight: 25 }}
        />
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{'Exercícios'}</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={exercise}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => (
              <List.Item
                style={styles.listItem}
                title={item.get('exercise').get('name')}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                description={item.get('exercise').get('description')}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={3}
                onPress={() =>
                  navigation.navigate('Player', [
                    item.get('exercise').get('video').url(),
                    item.get('exercise').get('name'),
                    item.get('sets'),
                    item.get('reps'),
                    item.get('timer'),
                    patient,
                    item.get('exercise'),
                  ])
                }
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
