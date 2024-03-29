import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#76BCAA',
  },
  scrollview: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: -10,
    width: 150,
    height: 150,
  },
  name: {
    color: '#222222',
    fontSize: 26,
    fontWeight: 'bold',
  },
  form: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.08,
    marginTop: '15%',
    borderWidth: 1,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: Dimensions.get('window').width * 0.76,
    height: Dimensions.get('window').height * 0.07,
    paddingLeft: 5,
  },
  button: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.68,
    height: Dimensions.get('window').height * 0.08,
    marginTop: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 15,
    paddingLeft: 10,
  },
});

export default styles;
