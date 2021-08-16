import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    justifyContent: 'center',
    height: '30%',
  },
  header_text: {
    color: '#f0f0f0',
    fontSize: 18,
    paddingLeft: '10%',
  },
  header_text_bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
  background: {
    flex: 2,
    height: '100%',
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});

export default styles;
