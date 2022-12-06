import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#76BCAA',
  },
  viewTitle: {
    marginTop: Dimensions.get('window').height * 0.035,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  title: {
    paddingLeft: Dimensions.get('window').width * 0.07,
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewList: {
    flex: 1,
    alignItems: 'center',
  },
  touchable: {
    width: Dimensions.get('window').width * 0.88,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#565755',
  },
  itemContainer: {
    width: Dimensions.get('window').width * 0.88,
  },
  imagebox: {
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.875,
    height: Dimensions.get('window').height * 0.375,
    borderRadius: 5,
  },
  listTitle: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listDescription: {
    fontSize: 14,
    textAlign: 'justify',
  },
});

export default styles;
