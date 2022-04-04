import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#76BCAA',
  },
  viewTitle: {
    flex: 1,
    marginTop: Dimensions.get('window').height * 0.035,
  },
  title: {
    marginBottom: Dimensions.get('window').height * 0.035,
    paddingLeft: Dimensions.get('window').width * 0.07,
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewList: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.88,
    height: Dimensions.get('window').height * 0.142,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#565755',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listDescription: {
    fontSize: 12,
  },
  image: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.14,
    marginLeft: -8,
    borderRadius: 5,
  },
});

export default styles;
