import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import Header from '../../components/Header';
import { database } from '../../services/firebase';
import styles from './styles';

export function Monitoring(props) {
  const [tests, setTest] = useState([]);
  const [exercises, setExercises] = useState([]);

  const participant = props.route.params.id;

  useEffect(() => {
    var liTest = [];
    var liExercise = [];

    database
      .ref('participantPostForm')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (
            child.val().participant == participant &&
            child.val().className == 'test'
          ) {
            liTest.push({
              name: child.val().name,
              createdAt: child.val().createdAt,
              id: child.key,
            });
          }
        });
        setTest(liTest);
      });

    database
      .ref('participantPostForm')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (
            child.val().participant == participant &&
            child.val().className == 'exercise'
          ) {
            liExercise.push({
              name: child.val().name,
              createdAt: child.val().createdAt,
              id: child.key,
            });
          }
        });
        setExercises(liExercise);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Monitoramento" />
      <View style={styles.wrapper}>
        <ScrollView horizontal={false}>
          <ScrollView horizontal={true}>
            <View style={styles.formBox}>
              <Text style={styles.subTitle}>{'Testes Feitos:'}</Text>
              <View style={styles.formContainer}>
                <FlatList
                  nestedScrollEnabled
                  data={tests}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.name}
                      titleNumberOfLines={1}
                      titleStyle={styles.description}
                      right={() => (
                        <View style={styles.date}>
                          <Text style={styles.textDate}>{item.createdAt}</Text>
                        </View>
                      )}
                    />
                  )}
                />
              </View>
              <Text style={styles.subTitle}>{'Exercícios Feitos:'}</Text>
              <View style={styles.formContainer}>
                <FlatList
                  nestedScrollEnabled
                  data={exercises}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.name}
                      titleNumberOfLines={1}
                      titleStyle={styles.description}
                      right={() => (
                        <View style={styles.date}>
                          <Text style={styles.textDate}>{item.createdAt}</Text>
                        </View>
                      )}
                    />
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}
