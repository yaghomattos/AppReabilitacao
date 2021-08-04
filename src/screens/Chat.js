import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import Parse from 'parse/react-native.js';
import { useParseQuery } from '@parse/react-native';

const parseQuery = new Parse.Query('Chat');
parseQuery.descending('createdAt');

export function Chat(props) {
  var toAdmin = {
    __type: 'Pointer',
    className: '_User',
    objectId: 'Cp04cRWSvd',
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

  return (
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
            avatar: 'https://placeimg.com/140/140/any',
          },
        }))
      }
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
