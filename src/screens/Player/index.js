import React from 'react';
import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function Player(props) {
  const navigation = useNavigation();

  const url = props.route.params[0];

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>{props.route.params[1]}</Text>
        </View>
        <View style={styles.videoBox}>
          <Image source={{ uri: url }} style={styles.videoItem} />
        </View>
        <View style={styles.description}>
          <Text style={styles.paramsTitle}>{'Séries:'}</Text>
          <View style={styles.paramsBox}>
            <Text style={styles.params}>{props.route.params[2]}</Text>
          </View>
          <Text style={styles.paramsTitle}>{'Repetições:'}</Text>
          <View style={styles.paramsBox}>
            <Text style={styles.params}>{props.route.params[3]}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ExerciseEnding', props.route.params[4])
            }
          >
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Terminei'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
