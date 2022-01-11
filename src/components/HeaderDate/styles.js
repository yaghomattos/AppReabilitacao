import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '19%',
  },
  back: {
    color: '#fff',
  },
  separate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3E9ACD',
  },
  header_text: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: '6%',
  },
  header_text_bold: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '6%',
  },
});

export default styles;
