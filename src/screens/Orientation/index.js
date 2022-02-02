import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';
import { Button } from '../../components/Button/index';
import Header from '../../components/Header';
import { database } from '../../services/firebase';
import styles from './styles';

export const Orientation = (props) => {
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
            li.push({
              orientation: child.val().orientation,
              id: child.key,
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
              renderItem={({ item }) => (
                <List.Item
                  style={{
                    width: 350,
                    height: item.orientation.length,
                    minHeight: 40,
                    marginBottom: 5,
                    borderRadius: 5,
                    paddingHorizontal: 0,
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#6f6f6f',
                  }}
                  title={item.orientation}
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
