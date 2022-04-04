import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    paddingBottom: '2%',
    backgroundColor: '#76BCAA',
  },
  person: {
    paddingLeft: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingTop: 4,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
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
});

export default styles;
