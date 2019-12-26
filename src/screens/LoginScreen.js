import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput, Image, CheckBox, ScrollView } from 'react-native'
import Logo from '../images/LYRECO.png'
const { width, heigh } = Dimensions.get('window');

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={Logo} style={{ width: '80%', height: '80%' }}></Image>
                </View>
                <View style={styles.formLogin}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.titleInput}>Identifiant:</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.titleInput}>Mot de passe:</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={[styles.inputGroup, { flexDirection: 'row', alignItems: 'center' }]}>
                        <CheckBox></CheckBox>
                        <Text style={{ color: '#6600ff' }}>Connexion automatique</Text>
                    </View>
                    <View style={[styles.inputGroup, { margin: 30, alignItems: 'center' }]}>
                        <Text style={[styles.titleInput, { fontSize: 15 }]}>CRÉER OU RÉINITIALISER MON MOT DE PASSE</Text>
                    </View>
                    <TouchableOpacity style={styles.btnTouchable}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>SE CONNECTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    formLogin: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputGroup: {
        width: '80%',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        marginBottom: 40,
        borderRadius: 7,
        paddingLeft: 15
    },
    titleInput: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#6600ff',
        marginBottom: 5
    },
    btnTouchable: {
        backgroundColor: '#9ACD32',
        width: "85%",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }

})