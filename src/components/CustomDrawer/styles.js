import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.08,
    marginLeft: Dimensions.get('window').width * 0.03,
    alignItems: 'center',
  },

  button_label: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#000',
  },
  text: {
    height: Dimensions.get('window').height * 0.08,
    marginLeft: Dimensions.get('window').width * 0.03,
    justifyContent: 'center',
  },
  text_label: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    color: '#000',
  },
});

export default styles;
