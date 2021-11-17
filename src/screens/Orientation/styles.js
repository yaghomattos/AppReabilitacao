import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  header: {
    alignItems: 'center',
    height: '20%',
  },
  backView: {
    width: '100%',
    paddingStart: 20,
    margin: 30,
  },
  back: {
    color: '#fff',
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: '10%',
    paddingTop: '5%',
    fontWeight: 'bold',
  },
  backgroundList: {
    height: '80%',
    backgroundColor: '#f5f5f5',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  viewList: {
    flex: 1,
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
  itemTitle: {
    fontSize: 22,
    color: '#fff',
  },
});

export default styles;
