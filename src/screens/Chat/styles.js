import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    paddingBottom: "2%",
    backgroundColor: '#3E9ACD',
  },
  back: {
    paddingTop: "8%",
    paddingLeft: "6%",
  },
  avatarContainer: {
    paddingBottom: "2%",
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: "#fff",
  },
  person: {
    paddingLeft: "10%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingTop: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
  },
  viewCircle: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 14,
  },
  circleCall: {
    width: 42,
    height: 42,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000",
  },
  circleVideo: {
    width: 42,
    height: 42,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000",
    marginRight: "10%",
  },
  sendingContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
    bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
