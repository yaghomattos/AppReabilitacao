import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../components/Button/index';
import { database } from '../../services/firebase';
import styles from './styles';

export const Orientation = (props) => {
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState('');

  const test = props.route.params.id;
  const propertys = props.route.params;

  useEffect(() => {
    var li = [];
    database.ref('selectOrientation').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().test == test) {
          selectTestList.push({
            orientation: child.val().orientation,
          });
        }
      });
      setOrientation(li);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backView}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.header_text}>{'Orientações'}</Text>
          </View>
        </View>
        <View style={styles.backgroundList}>
          <View style={styles.viewList}>
            <FlatList
              data={orientation}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <List.Item
                  style={{
                    width: 350,
                    height: item.get('orientation').get('text').length,
                    marginBottom: 5,
                    borderRadius: 5,
                    paddingHorizontal: 0,
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#6f6f6f',
                  }}
                  title={item.get('orientation').get('text')}
                  titleNumberOfLines={100}
                  titleStyle={styles.itemTitle}
                />
              )}
            />
          </View>
          <Button title="Continuar" onPress="FormStart" props={propertys} />
        </View>
      </View>
    </>
  );
};
