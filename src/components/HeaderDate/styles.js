import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 22,
  },
  back: {
    color: '#222222',
  },
  separate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76BCAA',
  },
  header_text: {
    color: '#222222',
    fontSize: 16,
    paddingLeft: '6%',
  },
  header_text_bold: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '6%',
  },
});

export default styles;
