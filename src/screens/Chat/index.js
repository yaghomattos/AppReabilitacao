import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { Avatar, IconButton } from 'react-native-paper';
import { database } from '../../services/firebase';
import styles from './styles';

export function Chat(props) {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  const [results, setResults] = useState([]);

  var participant = props.route.params.id;
  var user = props.route.params.user;
  var adminName = 'Terapeuta';

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
              createdAt: child.val().createdAt,
              updatedAt: child.val().updatedAt,
            });
          }
        });
        li.reverse();
        setResults(li);
      });
  }, [results]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const chatRef = database.ref('chat');

    const date = new Date();
    const brazilianDate = date.toLocaleString();

    chatRef.push({
      content: messages[0].text,
      participant: participant,
      user: user,
      from: '2',
      createdAt: brazilianDate,
      updatedAt: brazilianDate,
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

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#3E9ACD',
          },
          left: {
            backgroundColor: '#fff',
          },
        }}
      />
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
        renderBubble={renderBubble}
      />
    </SafeAreaView>
  );
}
