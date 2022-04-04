import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  wrapper: {
    flex: 1,
  },
  formBox: {
    width: Dimensions.get('window').width,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  subTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  formContainer: {
    height: 180,
    paddingTop: 5,
    marginBottom: 20,
  },
  description: {
    fontSize: 12,
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#000',
  },
  date: {
    justifyContent: 'center',
  },
  textDate: {
    fontSize: 13,
    color: '#000',
  },
});

export default styles;
