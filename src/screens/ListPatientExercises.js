import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

/* quando o id = x pegar todos os exercises de ListExercises */

const parseQuery = new Parse.Query('ListExercise');
parseQuery.descending('createdAt');
// parseQuery.equalTo('Patient', tuX9NMFdax);
// parseQuery.find();
// parseQuery.get(tuX9NMFdax);

export const ListPatientExercises = () => {
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

  console.log(JSON.stringify(parseQuery));

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
    },
    listTitle: {
      fontSize: 22,
    },
    listDescription: {
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.get('name')}
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
          />
        )}
      />
    </View>
  );
};
