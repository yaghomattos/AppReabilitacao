import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E9ACD',
  },
  viewTitle: {
    flex: 1,
    paddingTop: 40,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    paddingLeft: 36,
    fontSize: 14,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listDescription: {
    fontSize: 12,
  },
  listItem: {
    width: 342,
    height: 92,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default styles;
