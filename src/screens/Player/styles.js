import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '8%',
    paddingBottom: '8%',
  },
  back: {
    color: '#fff',
    paddingLeft: '6%',
  },
  title: {
    marginRight: '39%',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  videoBox: {
    height: '55%',
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 20,
    paddingTop: 10,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: '#fff'
  },
  videoItem: {
    width: 340,
    height: 340,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  description: {
    alignItems: 'center',
    paddingBottom: '8%',
    marginHorizontal: 20,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    backgroundColor: '#fff'
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
    backgroundColor: '#C4C4C4'
  },
  params: {
    fontSize: 18,
  },
});

export default styles;
