import React, {useState} from "react"
import {View,Text,TextInput, TouchableOpacity,Vibration,SafeAreaView,Keyboard,Pressable} from "react-native";
import Resultimc from "./Resultimc";
import styles from "./style";

export default function Form(){
const[height, setHeight]=useState(null)
const[weight, setWeight]=useState(null)
const[messageImc,setMessageImc]=useState("Preencha o peso e a altura");
const[imc, setImc]=useState(null)
const[TextButton, setTextButton]=useState("calcular")
const[errorMessage,setErrorMessage]=useState(null)

function imcCalculator(){
    let heightFormat= height.replace(",",".")
    return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
}

function verificationIms(){
    if(imc==null){
        setErrorMessage("campo obrigatório*")
        Vibration.vibrate();
    }
}

function validationImc(){
    if(weight !=null && height !=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }else{
        verificationIms() 
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }
}

    return(
            <View style={styles.formContext}>
                {imc==null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keybordType="numeric"
                />
                <Text style={styles.errorMensage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keybordType="numeric"
                />
                <Text style={styles.errorMensage}>{errorMessage}</Text>
                <TouchableOpacity
                style={styles.ButtonCalculator} 
                onPress={() => {validationImc()
                }}
                >
                 <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <Resultimc messageResultimc={messageImc} resultImc={imc}/>
                <TouchableOpacity
                    style={styles.ButtonCalculator} 
                onPress={() => {validationImc()
                }}
                >
                 <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    );
}