import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#76BCAA',
  },
  viewTitle: {
    marginTop: Dimensions.get('window').height * 0.035,
    marginBottom: Dimensions.get('window').height * 0.02,
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
    marginTop: 1,
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').height * 0.15,
    borderRadius: 5,
  },
  listTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listDescription: {
    marginBottom: -30,
    fontSize: 14,
  },
});

export default styles;
