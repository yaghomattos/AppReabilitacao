import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import Header from '../../components/Header';
import { database } from '../../services/firebase';
import styles from './styles';
export const Orientation = (props) => {
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState('');

  const provider = props.route.params.id;
  const propertys = props.route.params;

  useEffect(() => {
    var li = [];
    database
      .ref('selectOrientation')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().hasOwnProperty('test')) {
            if (child.val().test == provider) {
              li.push({
                orientation: child.val().orientation,
                id: child.key,
              });
            }
          } else {
            if (child.val().exercise == provider) {
              li.push({
                orientation: child.val().orientation,
                id: child.key,
              });
            }
          }
        });
        setOrientation(li);
      });
  }, [orientation]);

  return (
    <View style={styles.container}>
      <Header title="Orientações" />
      <View style={styles.background}>
        {orientation.toString() === '' ? (
          <View style={styles.noOrientation}>
            <Text style={styles.itemTitle}>{'Sem orientações'}</Text>
          </View>
        ) : (
          <View style={styles.viewList}>
            <FlatList
              data={orientation}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <List.Item
                    style={styles.item}
                    title={item.orientation}
                    titleNumberOfLines={100}
                    titleStyle={styles.itemTitle}
                  />
                </View>
              )}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('FormStart', propertys)}
        >
          <View style={styles.button}>
            <Text style={styles.text_label}>{'Continuar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
