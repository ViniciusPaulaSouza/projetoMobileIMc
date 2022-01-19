import React from "react"
import {View, Text, Share, TouchableOpacity } from "react-native"
import styles from "./style";

export default function Resultimc(props){

    const onShare = async() =>{
        const result = await Share.share({
            message:"Meu imc hoje é: "+props.result,
        })
    }

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxSharebutton}>
            <Text style={styles.titleResultImc}>{props.messageResultimc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
                <TouchableOpacity 
                    onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}