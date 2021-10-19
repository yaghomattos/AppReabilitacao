import { StyleSheet, Dimensions } from 'react-native';

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
    paddingLeft: '6%',
    color: '#fff',
  },
  highlight: {
    marginRight: '28%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  date: {
    color: '#000',
    fontSize: 18,
  },
  divider: {
    height: 0.8,
  },
  today: {
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: '4%',
    paddingBottom: '4%',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  exerciseBox: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  subTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  exerciseContainer: {
    height: 160,
    paddingTop: 5,
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#C4C4C4',
  },
  description: {
    fontSize: 16,
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#000',
  },
  feedback: {
    height: 30,
    paddingTop: '1%',
    paddingLeft: '5%',
    marginBottom: 30,
    borderRadius: 4,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#C4C4C4',
  },
});

export default styles;
