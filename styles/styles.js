import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    bannerText:{
        fontSize:20,
        textAlign:'center',
    },
    mainButton:{
        width:"100%",
        padding:"10%"
    },
    container: {
      width: "100vw",
      height:"100vh",
      flex:1,
      alignItems:"center",
    },
    title: {
      fontSize: 25,
      textAlign:"center"
    },
    image: {
      width: "200px",
      height: "200px",
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
        minHeight:"5vh",
        borderColor:"gray",
        borderWidth:"1px",
        borderRadius:"5px",
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
        padding:"2%",
      },
      searchIcon:{
        width:"20px",
        height:"20px",
      }
    
  });

   
export const stylesDetail = StyleSheet.create({
  detailContainer:{
   borderColor:"black",
   borderWidth:"1px",
   borderRadius:"10px",
   width:"90%",
   alignSelf:"center",
   marginTop:"20px"
  },
  title:{
    fontSize:"20px",
    textAlign:"center",
  },steps:{
    width: "100%",
    padding:"5%"
  },
  imageDetail:{
    width:"300px",
    height: "300px",
    alignSelf:"center"
  }
})
