import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    bannerText:{
        fontSize:20,
        textAlign:'center',
    },
    mainButton:{
        padding:10,
        width:"90%",
        alignSelf:"center"
    },
    container: {
      flex:1,
      alignItems:"center",
    },
    title: {
      fontSize: 25,
      textAlign:"center"
    },
    image: {
      width: 200,
      height: 200,
      alignItems:"center",
      justifyContent:"center"
    },
    imageContainer:{
        width: "100%",
        alignItems:"center",
        justifyContent:"center"
    },
    searcherContainer:{
        width:"90%",
        maxHeight:30,
        minHeight:30,
        borderColor:"gray",
        borderWidth:1,
        borderRadius:5,
        marginTop:"5%",
        display:"flex",
        alignItems:"center",
        flexDirection:"row"
    },
    searcherBar:{
        width:"90%",
        minHeight:"100%",
        borderColor:"gray",
    },
      list:{
        width:"100%",
        padding:20,
      },
      searchIcon:{
        fontSize:20,
        paddingHorizontal:"3%"
      }
    
  });

   
export const stylesDetail = StyleSheet.create({
  detailContainer:{
   borderColor:"black",
   borderWidth:1,
   borderRadius:5,
   width:"90%",
   alignSelf:"center",
   marginTop:20
  },
  title:{
    fontSize:20,
    textAlign:"center",
  },steps:{
    padding:"5%"

  },
  imageDetail:{
    flex:1,
    height:300,
    width:300,
    alignSelf:"center"

  }
})
