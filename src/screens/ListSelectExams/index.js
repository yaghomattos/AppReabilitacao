import React, { useState } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectExams');
parseQuery.ascending('createdAt');

var exam = '';

async function Search(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  const results = await parseQuery.find();

  exam = results;
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

export const ListSelectExams = (props) => {
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState(false);

  const patient = props.route.params;

  async function VerifyOrientation() {
    var patientPointer = {
      __type: 'Pointer',
      className: 'Patient',
      objectId: patient,
    };

    const SelectOrientations = Parse.Object.extend('SelectOrientations');
    const query = new Parse.Query(SelectOrientations);
    query.equalTo('patient', patientPointer);
    query.equalTo('receiver', 'exam');
    try {
      const results = await query.find();
      if (
        results[0].get('receiver') == 'exam' ||
        results[0].get('receiver') == 'both'
      )
        setOrientation(true);
    } catch (error) {
      console.error('SelectOrientations receiver false');
    }
  }

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  VerifyOrientation();

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
          color="white"
          style={{ paddingRight: 25 }}
        />
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{'Testes'}</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={exam}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => (
              <List.Item
                style={styles.listItem}
                title={item.get('exam').get('name')}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                description={item.get('exam').get('description')}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={3}
                onPress={() =>
                  orientation
                    ? navigation.navigate('Orientation', [
                        item.get('exam').get('video').url(),
                        item.get('exam').get('name'),
                        item.get('sets'),
                        item.get('reps'),
                        item.get('timer'),
                        patient,
                        item.get('exam'),
                      ])
                    : navigation.navigate('Player', [
                        item.get('exam').get('video').url(),
                        item.get('exam').get('name'),
                        item.get('sets'),
                        item.get('reps'),
                        item.get('timer'),
                        patient,
                        item.get('exam'),
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
