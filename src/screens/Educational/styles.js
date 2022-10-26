import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#76BCAA',
  },
  person: {
    paddingLeft: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    height: Dimensions.get('window').height * 0.68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    color: '#222222',
  },
});

export default styles;
