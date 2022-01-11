import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { Avatar, IconButton } from 'react-native-paper';
import { database } from '../../services/firebase';
import styles from './styles';

export function Chat(props) {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  const [results, setResults] = useState([]);

  var participant = props.route.params.id;
  var user = props.route.params.user;
  var adminName = props.route.params.userName;

  useEffect(() => {
    var li = [];
    database
      .ref('chat')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (
            child.val().user == user &&
            child.val().participant == participant
          ) {
            li.push({
              key: child.key,
              content: child.val().content,
              participant: child.val.user,
              user: child.val().user,
              from: child.val().from,
              createdAt: child.val().created_at,
              updatedAt: child.val().updated_at,
            });
          }
        });
        setResults(li);
      });
  }, [results]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const chatRef = database.ref('chat');

    chatRef.push({
      content: messages[0].text,
      participant: participant,
      user: user,
      from: '2',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }, []);

  function CheckRecipient(object) {
    if (object.from === '2') {
      return 1;
    }
    return 2;
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={40} color="#000" />
        </View>
      </Send>
    );
  }

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
            source={require('../../assets/profile.jpg')}
          />
        </View>
        <View style={styles.person}>
          <Text style={styles.text}>{adminName}</Text>
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
            _id: liveMessage.key,
            text: liveMessage.content,
            createdAt: liveMessage.createdAt,
            user: {
              _id: CheckRecipient(liveMessage),
              name: adminName,
            },
          }))
        }
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        placeholder="Digite sua mensagem"
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </SafeAreaView>
  );
}
