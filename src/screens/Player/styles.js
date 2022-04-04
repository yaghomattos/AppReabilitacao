import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  videoBox: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 70,
  },
  videoItem: {
    width: Dimensions.get('window').width * 0.86,
    height: Dimensions.get('window').height * 0.4,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  infoBox: {},
  description: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paramsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paramsBox: {
    alignItems: 'center',
  },
  paramsBox2: {
    alignItems: 'center',
  },
  timer: {
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  params: {
    fontSize: 18,
  },
  button: {
    width: Dimensions.get('window').width * 0.68,
    height: Dimensions.get('window').height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 15,
  },
});

export default styles;
