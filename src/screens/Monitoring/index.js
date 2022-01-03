import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Parse from 'parse/react-native.js';
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Divider, List } from 'react-native-paper';
import styles from './styles';

var date = new Date();

const parseQueryExams = new Parse.Query('SelectExams');
parseQueryExams.ascending('createdAt');
const parseQuery = new Parse.Query('SelectExercises');
parseQuery.ascending('createdAt');

var exercise = '';
var totalExercise = 0;
var exam = '';
var totalExam = 0;

async function Search(participantId) {
  var participantPointer = {
    __type: 'Pointer',
    className: 'Participant',
    objectId: participantId,
  };

  parseQuery.equalTo('participant', participantPointer);
  var resultParticipant = await parseQuery.find();
  totalExercise = resultParticipant.length;

  const query = new Parse.Query('SelectExercises');
  query.ascending('createdAt');
  query.equalTo('check', true);

  var result = await query.find();
  exercise = result;

  parseQueryExams.equalTo('participant', participantPointer);
  var resultParticipantExam = await parseQueryExams.find();
  totalExam = resultParticipantExam.length;

  const queryExam = new Parse.Query('SelectExams');
  queryExam.ascending('createdAt');
  queryExam.equalTo('check', true);

  var resultExam = await queryExam.find();
  exam = resultExam;
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

function getCurrentDate(data) {
  var date = data.getDate();
  var month = data.getMonth();
  var year = data.getFullYear();

  var monthName;
  monthName = new Array(
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
  return date + ' de ' + monthName[month] + ', ' + year;
}

const displayDate = () => {
  return <Text style={styles.date}>{getCurrentDate(date)}</Text>;
};

export function Monitoring(props) {
  const navigation = useNavigation();

  const participantId = props.route.params;

  const lastDate = new Date();

  const [show, setShow] = useState(false);

  const results = useParseQuery(parseQuery).results;
  const resultsExam = useParseQuery(parseQueryExams).results;
  Parse.User._clearCache();

  Search(participantId);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
        <TouchableHighlight
          style={styles.highlight}
          activeOpacity={0}
          onPress={() => {
            setShow(true);
          }}
        >
          {displayDate()}
        </TouchableHighlight>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="calendar"
            maximumDate={lastDate}
            onChange={(dateString) => {
              const newDate = new Date(dateString.nativeEvent.timestamp);
              date = newDate;
              setShow(false);
            }}
          />
        )}
      </View>
      <View style={styles.today}>
        <Text style={styles.title}>{'Feito Hoje'}</Text>
      </View>
      <Divider style={styles.divider} />
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <View style={styles.exerciseBox}>
            <Text style={styles.subTitle}>{'Exercícios:'}</Text>
            <View style={styles.exerciseContainer}>
              <FlatList
                nestedScrollEnabled={true}
                data={exercise}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                  <List.Item
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
                  {exercise.length +
                    ` de ${totalExercise} exercícios concluídos`}
                </Text>
              </View>
              <Text style={styles.subTitle}>{'Produtividade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {Productivy(exercise.length / totalExercise)}
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>{'Testes:'}</Text>
            <View style={styles.exerciseContainer}>
              <FlatList
                nestedScrollEnabled
                data={exam}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                  <List.Item
                    title={item.get('exam').get('name')}
                    titleNumberOfLines={1}
                    titleStyle={styles.description}
                    description={item.get('exam').get('description')}
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
                  {exam.length + ` de ${totalExam} testes concluídos`}
                </Text>
              </View>
              <Text style={styles.subTitle}>{'Produtividade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {Productivy(exam.length / totalExam)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
