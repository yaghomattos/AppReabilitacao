import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { readPatientId } from '../../components/Patient';

import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

import styles from './styles';

const parseQuery = new Parse.Query('Educational');
parseQuery.descending('createdAt');

var adminName = '';

async function Search(patientId) {
  readPatientId(patientId).then((response) => {
    adminName = response.get('createdFromName');
  });
}

export function Educational(props) {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  var patientId = props.route.params;

  Search(patientId);

  var currentPatient = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('to', currentPatient);
  parseQuery.find();

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#384955" />
      </View>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#384955" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Recomendações Educacionais'}</Text>
        </View>
      </View>
      <GiftedChat
        messages={
          results &&
          results.map((liveMessage) => ({
            _id: liveMessage.id,
            text: liveMessage.get('content'),
            createdAt: liveMessage.get('createdAt'),
            user: {
              _id: 2,
              name: adminName,
            },
          }))
        }
        textInputStyle={{ display: 'none' }}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </SafeAreaView>
  );
}
