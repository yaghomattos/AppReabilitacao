import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Alert,
  SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.descending('createdAt');

var exercise = '';

async function test(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  const results = await parseQuery.find();

  exercise = results;
}

export const ListSelectExercises = (patient) => {
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

  const navigation = useNavigation();

  test(patient.route.params);

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
          <Text style={styles.header_text_bold}>{'Olá, Paciente'}</Text>
          <Text style={styles.header_text}>{'6 de jun, 2021'}</Text>
        </View>
        <MaterialCommunityIcons
          name="bell"
          size={30}
          color="white"
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
                descriptionNumberOfLines={1}
                onPress={() =>
                  navigation.navigate(
                    'Player',
                    item.get('exercise').get('video').url()
                  )
                }
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
