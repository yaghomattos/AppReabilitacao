import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/native';
import Parse from 'parse/react-native.js';
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import styles from './styles';

const parseQuery = new Parse.Query('SelectTest');
parseQuery.ascending('createdAt');

var exam = '';

async function Search(participantId) {
  var participantPointer = {
    __type: 'Pointer',
    className: 'Participant',
    objectId: participantId,
  };

  parseQuery.equalTo('participant', participantPointer);
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

export const ListSelectTest = (props) => {
  const navigation = useNavigation();

  const participant = props.route.params;

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  Search(participant);

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
        <Text style={styles.title}>{'Testes'}</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={exam}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => (
              <List.Item
                style={{
                  width: 342,
                  height: item.get('exam').get('description'.length),
                  marginTop: 18,
                  borderWidth: 1,
                  borderRadius: 8,
                }}
                title={item.get('exam').get('name')}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                description={item.get('exam').get('description')}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={100}
                onPress={() =>
                  navigation.navigate('Orientation', [
                    item.get('exam').get('video').url(),
                    item.get('exam').get('name'),
                    item.get('timer'),
                    item.get('exam'),
                    participant,
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
