import React, {useState} from "react"
import {View,Text,TextInput,Button} from "react-native";
import Resultimc from "./Resultimc";
import styles from "./style";

export default function Form(){
const[height, setHeight]=useState(null)
const[weight, setWeight]=useState(null)
const[messageImc,setMessageImc]=useState("Preencha o peso e a altura");
const[imc, setImc]=useState(null)
const[TextButton, setTextButton]=useState("calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}
function validationImc(){
    if(weight !=null && height !=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
   setImc(null)
   setTextButton("Calcular")
   setMessageImc("preencha o peso e altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keybordType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keybordType="numeric"
                />
                <Button 
                onPress={() => validationImc()}
                title={TextButton}
                />
            </View>
            <Resultimc messageResultimc={messageImc} resultImc={imc}/>
        </View>
    );
}