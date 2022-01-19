import { StyleSheet } from "react-native";



const styles = StyleSheet.create({ 
    formContext: {
        flex:1,
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:"center",
        paddingTop:30
},

    form:{
        flex:1,
        width:"100%",
        padding:15,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        padding:0,
        
    },
    input:{
        width:"90%",
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
        width:"95%",
        backgroundColor:"#B0E0E6",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:10,
        marginTop:5,
    },
    textbuttonCalculator:{
        fontSize:20,
        color:"#00008B",
        paddingLeft:20,
    },

    errorMensage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },

    exhibitionResultImc:{
        width:"100%",
        height:"50%"
    }

});

export default styles