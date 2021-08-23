import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';

import Parse from 'parse/react-native.js';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const parseQuery = new Parse.Query('Chat');
parseQuery.descending('createdAt');

export function Chat(props) {
  var toAdmin = {
    __type: 'Pointer',
    className: '_User',
    objectId: 'a7ihMfzpFc',
  };

  var currentPatient = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: props.route.params,
  };

  parseQuery.equalTo('fromPatient', currentPatient);

  const [messages, setMessages] = useState([]);

  const { isLive, isLoading, isSync, results, count, erro, reload } =
    useParseQuery(parseQuery);

  Parse.User._clearCache();

  function teste(object) {
    if (object.get('from') === '2') {
      return 1;
    }
    return 2;
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = new Parse.Object('Chat');

    Message.set('fromAdmin', toAdmin);
    Message.set('fromPatient', currentPatient);
    Message.set('from', '2');
    Message.set('content', messages[0].text);
    try {
      const result = Message.save();
    } catch (error) {
      console.error('Error while creating Chat: ', error);
    }
  }, []);

  const navigation = useNavigation();

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={40} color='#000' />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon='chevron-double-down' size={36} color='#384955' />
      </View>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#384955' />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={100}
            style={styles.avatar}
            source={require('../../assets/profile.png')}
          />
        </View>
        <View style={styles.person}>
          <Text style={styles.text}>{'Nome do Reponsável'}</Text>
          <View style={styles.viewCircle}>
            <View style={styles.circleCall}>
              <Ionicons
                name="call-sharp"
                size={24}
                color="#fff"
                style={styles.call}
              />
            </View>
            <View style={styles.circleVideo}>
              <Ionicons
                name="videocam-sharp"
                size={24}
                color="#fff"
                style={styles.video}
              />
            </View>
          </View>
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
              _id: teste(liveMessage),
              name: 'Teste',
              avatar: 'https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg',
            },
          }))
        }
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        placeholder='Digite sua mensagem'
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </SafeAreaView>
  );
}
