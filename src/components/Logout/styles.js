import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.4,
    marginTop: Dimensions.get('window').height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: Dimensions.get('window').width * 0.68,
  },
  button: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#546F7A',
  },
  button_label: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#fefefe',
  },
});

export default styles;
