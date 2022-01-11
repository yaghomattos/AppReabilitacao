import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../components/Button/index';
import Header from '../../components/Header';
import { database } from '../../services/firebase';
import styles from './styles';

export const Orientation = (props) => {
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState('');

  const test = props.route.params.id;
  const propertys = props.route.params;

  useEffect(() => {
    var li = [];
    database
      .ref('selectOrientation')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().test == test) {
            selectTestList.push({
              orientation: child.val().orientation,
            });
          }
        });
        setOrientation(li);
      });
  }, [orientation]);

  return (
    <>
      <View style={styles.container}>
        <Header title="Orientações" />
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
                    height: item.orientation.text.length,
                    marginBottom: 5,
                    borderRadius: 5,
                    paddingHorizontal: 0,
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#6f6f6f',
                  }}
                  title={item.orientation.text}
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
