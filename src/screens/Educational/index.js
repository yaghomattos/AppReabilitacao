import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import Header from '../../components/Header';
import { database } from '../../services/firebase';
import styles from './styles';
export function Educational(props) {
  const [messages, setMessages] = useState([]);
  const [results, setResults] = useState([]);

  var participant = props.route.params.id;
  var user = props.route.params.user;
  var adminName = props.route.params.userName;

  useEffect(() => {
    var li = [];
    database
      .ref('educational')
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
              createdAt: child.val().created_at,
              updatedAt: child.val().updated_at,
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

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#565755',
          },
        }}
        textStyle={{
          left: {
            color: '#fefefe',
          },
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Educacional" />
      {results.toString() === '' ? (
        <View style={styles.noData}>
          <Text style={styles.itemTitle}>{'Nenhum conteúdo encontrado'}</Text>
        </View>
      ) : (
        <GiftedChat
          messages={
            results &&
            results.map((liveMessage) => ({
              _id: liveMessage.key,
              text: liveMessage.content,
              createdAt: liveMessage.createdAt,
              user: {
                _id: 2,
                name: adminName,
              },
            }))
          }
          textInputStyle={{ display: 'none' }}
          scrollToBottomComponent={scrollToBottomComponent}
          renderLoading={renderLoading}
          renderBubble={renderBubble}
        />
      )}
    </SafeAreaView>
  );
}
