import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({ 
    formContext: {
       width:"100%",
       height: width,
       bottom:0,
       backgroundColor:"#ffffff",
       alignItems:"center",
       borderTopLeftRadius:30,
       borderBottomRightRadius:30,
       marginTop:30,
        
},

    form:{
        width:"100%",
        height:"auto",
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
    }
});

export default styles