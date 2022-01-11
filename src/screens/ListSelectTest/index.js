import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import HeaderDate from '../../components/HeaderDate';
import { database } from '../../services/firebase';
import styles from './styles';

export const ListSelectTest = (props) => {
  const navigation = useNavigation();

  const participant = props.route.params;

  const [test, setTest] = useState([]);

  useEffect(() => {
    var li = [];
    database
      .ref('selectTest')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().participant == participant.key) {
            li.push({
              test: child.val().test,
              numReps: child.val().numReps,
              timer: child.val().timer,
              name: child.val().name,
              description: child.val().description,
              video: child.val().video,
              preview: child.val().preview,
              participant: child.val().participant,
              className: 'test',
              id: child.key,
            });
          }
        });
        setTest(li);
      });
  }, [test]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderDate />
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{'Testes'}</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={test}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <List.Item
                style={{
                  width: 342,
                  height: item.description.length,
                  minHeight: 80,
                  justifyContent: 'center',
                  marginVertical: 38,
                  borderWidth: 1,
                  borderRadius: 8,
                }}
                title={item.name}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                description={item.description}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={100}
                onPress={() => navigation.navigate('Orientation', item)}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
