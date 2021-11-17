import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
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
    height: 40,
    borderRadius: 10,
    backgroundColor: '#384955',
  },
  button_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
