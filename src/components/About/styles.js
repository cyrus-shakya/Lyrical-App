import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#E1FCF6",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems:'center'
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom:20,
  },
  text: {
    fontSize: 17,
    marginBottom: 20,
    lineHeight: 24,
  },
  developerName: {
    fontSize: 16,
    marginBottom: 10,
  },
  header:{
    fontSize: 24,
    color: 'black',
    fontWeight:'bold',
    marginBottom: 10,
  }
});

export default styles;