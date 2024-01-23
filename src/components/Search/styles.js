import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flex:1,
    alignSelf: "stretch",
    backgroundColor: "#E1FCF6",
  },
  searchView:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    margin:10,
  },
  input: {
    width:250,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  
  result: {
    marginBottom: 5,
    fontSize: 16,
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