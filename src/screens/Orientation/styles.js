import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  backgroundList: {
    height: '90%',
    backgroundColor: '#f5f5f5',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  viewList: {
    height: '80%',
    paddingTop: 10,
    alignItems: 'center',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  item: {
    width: 350,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#afafaf',
  },
  divider: {
    height: 3,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 22,
    color: '#fff',
  },
});

export default styles;
