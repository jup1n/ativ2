import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import Inputs from "../../components/Inputs";

export default function Home() {
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [imc, setImc] = useState('')

    function calcIMC(){
        var imc = weight / (height * height)

        if (imc < 18.5){
            setImc('Baixo peso')
        } else if ((18.5 <= imc) && (imc < 24.9)){
            setImc('Peso normal')
        } else if ((25 <= imc) && (imc < 29.9)){
            setImc('Sobrepeso')
        } else if ((30 <= imc) && (imc < 34.9)){
            setImc('Obesidade grau 1')
        } else if ((35 <= imc) && (imc < 39.9)) {
            setImc('Obesidade grau 2')
        } else if (imc > 40){
            setImc('Obesidade grau 3 (obesidade mórbida)')
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.titleConteiner}>
                    <Text style={styles.textTitle}>Calculadora de IMC</Text>
                    <Text style={styles.text}>Descubra qual o seu Índice de Massa Corporal</Text>
                </View>
                <View style={styles.inputConteiner}>
                    
                    <View style={styles.inputConteiner}>
                        <Inputs onChangeInput={setWeight} title={'Peso (Kg)'}/>
                        <Inputs onChangeInput={setHeight} title={'Altura (m)'}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={Keyboard.dismiss} onPressIn={calcIMC}>
                    <Text style={styles.textButton}>CALCULAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.resultConteiner}>
                <Text style={styles.textResult}>Seu índice de massa corporal é</Text>
                <Text style={styles.result}>{imc}</Text>
            </View>
            <Text style={styles.footer}>CESUL</Text>
        </View>
    )
}