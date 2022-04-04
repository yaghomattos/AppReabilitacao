import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
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
          if (child.val().participant == participant.id) {
            li.push({
              test: child.val().test,
              reps: child.val().reps,
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
        <View style={styles.viewList}>
          <FlatList
            data={test}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <List.Item
                style={styles.itemContainer}
                title={item.name}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                description={item.description}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={100}
                onPress={() => navigation.navigate('Orientation', item)}
                left={() => (
                  <Image style={styles.image} source={{ uri: item.preview }} />
                )}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
