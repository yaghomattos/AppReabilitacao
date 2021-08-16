import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  form: {
    width: '54%',
    maxWidth: 280,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  button_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
