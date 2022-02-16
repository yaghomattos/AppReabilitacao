import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  title: {
    marginRight: '39%',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  videoBox: {
    height: '50%',
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 20,
    paddingTop: 10,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: '#fFf',
  },
  videoItem: {
    width: '92%',
    height: '95%',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  description: {
    height: '30%',
    alignItems: 'center',
    paddingBottom: 10,
    marginHorizontal: 20,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    backgroundColor: '#fff',
  },
  paramsTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  paramsBox: {
    width: '15%',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
  },
  paramsBox2: {
    width: '45%',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
  },
  timer: {
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
  },
  params: {
    fontSize: 18,
  },
  button: {
    width: 100,
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#384955',
  },
  text_label: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
