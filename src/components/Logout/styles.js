import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '40%',
    maxWidth: 200,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    backgroundColor: '#DE726A',
    borderRadius: 10,
  },
  button_label: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
