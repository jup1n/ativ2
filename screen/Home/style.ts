import { cloneElement } from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#967ADC',
        flex:1,
        paddingTop: 60
    },

    header: {
        height: 350,
        gap: 80,
        paddingHorizontal: 20,
    },

    titleConteiner: {
        alignItems:"center"
    },

    textTitle: {
        color: '#FDFCFE',
        fontSize: 25,
        fontWeight: 'bold'
    },

    text: {
        color: '#FDFCFE',
        fontSize: 15,
        paddingBottom: 5
    },

    inputConteiner: {
        flexDirection: 'row',
        gap:92
    },

    input: {
        height: 56,
        width: 145,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        padding: 15
    },

    button: {
        width: '100%',
        height: 56,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        justifyContent: 'center'
        
    },

    textButton: {
        textAlign:'center',
        color: '#967ADC',
        fontSize: 18,
        fontWeight: 'bold'
    },

    resultConteiner: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems:"center",
        gap: 50
    },

    textResult: {
        fontSize: 15,
        color: '#967ADC'
    },

    result: {
        fontSize: 30,
        color: '#967ADC',
        fontWeight: 'bold'
    },

    footer: {
        height:70,
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FDFCFE',
    }
})