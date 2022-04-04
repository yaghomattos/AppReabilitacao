import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76BCAA',
  },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  viewList: {
    height: Dimensions.get('window').height * 0.68,
  },
  itemContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item: {
    width: Dimensions.get('window').width * 0.79,
  },
  itemTitle: {
    fontSize: 18,
    color: '#222222',
  },
  button: {
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.07,
    marginTop: Dimensions.get('window').height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text_label: {
    color: '#fefefe',
    fontSize: 15,
  },
});

export default styles;
