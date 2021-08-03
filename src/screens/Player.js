import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export function Player(video) {
  const url = video.route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: url }}
        style={styles.videoItem}
      />
    </View>
  );
}
const  styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#f5f5f5',
  },
  videoItem: {
	width: 400,
	height: 400,
	resizeMode: 'cover',
	marginHorizontal: 5,
	marginVertical: 5,
  alignItems: 'center',
  },
});
