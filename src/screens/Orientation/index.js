import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectOrientations');
parseQuery.descending('createdAt');

export const Orientation = (props) => {
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState('');

  const examId = props.route.params[3].id;

  const propertys = props.route.params;

  useEffect(() => {
    async function Search() {
      var examPointer = {
        __type: 'Pointer',
        className: 'Exam',
        objectId: examId,
      };

      parseQuery.equalTo('exam', examPointer);
      const results = await parseQuery.find();

      setOrientation(results);
    }

    Search();
  }, [orientation]);

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

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
                  style={styles.item}
                  title={item.get('orientation').get('text')}
                  titleNumberOfLines={10}
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
