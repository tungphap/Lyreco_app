import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
module.exports = {
    //style layout
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //style component
    logoImage: {
        width: '80%',
        height: '80%'
    },
    textTitle: {
        color: '#2d2e87',
        fontSize: 30,
        letterSpacing: 5,
        textShadowOffset: { width: 4, height: 1 },
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1
    },
    inputGroup: {
        width: '80%',
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        marginBottom: 30,
        borderRadius: 7,
        paddingLeft: 15
    },
    titleInput: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#6600ff',
    },
    btnTouchable: {
        backgroundColor: '#9ACD32',
        width: "85%",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5,
    },
    E_Appro: {
        backgroundColor: '#fff',
        width: width / 2.5,
        height: '70%',
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 10,
        },
        shadowOpacity: 0.45,
        shadowRadius: 1.14,
        elevation: 5,
    }
}