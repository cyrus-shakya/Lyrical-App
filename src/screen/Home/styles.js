import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header : {
    fontSize: 24,
    color: 'black',
    fontWeight:'bold',
    marginTop:10
  },
  container: {
    flex:1,
    alignSelf: "stretch",
    backgroundColor: "#E1FCF6",
    padding: 12,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  song: {
    fontSize: 22,
    marginBottom: 10,
  },
  artist:{
    fontSize: 18,
    marginBottom: 10,
  },
  listview:{
    backgroundColor: '#1DB9A2',
    marginBottom:10,
    padding:10

  },
  list:{
    margin:10

  }
  
});
export default styles;