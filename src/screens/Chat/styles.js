import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fefefe',
  },
  header: {
    paddingBottom: '2%',
    backgroundColor: '#76BCAA',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  person: {
    paddingLeft: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  messages: {
    height: '94%',
    backgroundColor: '#fefefe',
  },
  sendingContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputToolbar: {
    marginHorizontal: 30,
    marginBottom: 15,
    borderWidth: 0.5,
    borderTopWidth: 0.5,
    borderRadius: 5,
    borderColor: 'black',
    borderTopColor: 'black',
  },
});

export default styles;
