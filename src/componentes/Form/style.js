import { StyleSheet } from "react-native";



const styles = StyleSheet.create({ 
    formContext: {
       width:"100%",
       height: "70%",
       bottom:15,
       backgroundColor:"#ffffff",
       alignItems:"center",
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       marginTop:30,
        
},

    form:{
        width:"80%",
        height:"auto",
        alignItems:"center",
        marginTop:30,
        padding:10,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        padding:20,
        
    },
    input:{
        width:"100%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
        
    },
    ButtonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundColor:"black",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textbuttonCalculator:{
        fontSize:20,
        color:"red",
    },
});

export default styles