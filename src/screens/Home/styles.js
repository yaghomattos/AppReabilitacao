import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  app_name: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcome: {
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.05,
    marginLeft: Dimensions.get('window').height * 0.03,
  },
  welcome_text: {
    color: '#000',
    fontSize: 22,
  },
  welcome_text_bold: {
    color: '#000',
    fontWeight: 'bold',
  },
  alignDivider: {
    alignItems: 'center',
  },
  divider: {
    width: Dimensions.get('window').width * 0.88,
    height: 1,
    marginBottom: Dimensions.get('window').height * 0.05,
    alignItems: 'center',
    color: '#565755',
  },
  background: {
    marginBottom: Dimensions.get('window').height * 0.04,
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    marginBottom: Dimensions.get('window').height * 0.019,
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.41,
    height: Dimensions.get('window').width * 0.33,
    borderRadius: 5,
    backgroundColor: '#fefefe',
  },
  button_label: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
  fake_button: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.33,
  },
});

export default styles;
