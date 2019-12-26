import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, ScrollView, TextInput, Image, CheckBox, KeyboardAvoidingView } from 'react-native'
import Logo from '../images/LYRECO.png'
import styles from '../style'
const { width, height } = Dimensions.get('window');
export default class LoginScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                {/* logo company */}
                <View style={styles.header}>
                    <Image source={Logo} style={{ width: width, height: height / 3 }}></Image>
                </View>
                {/* form input login in here */}
                <View style={styles.body}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.titleInput}>Identifiant:</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.titleInput}>Mot de passe:</Text>
                        <TextInput style={styles.textInput} secureTextEntry={true}></TextInput>
                    </View>
                    <View style={[styles.inputGroup, { flexDirection: 'row', alignItems: 'center' }]}>
                        <CheckBox></CheckBox>
                        <Text style={{ color: '#6600ff' }}>Connexion automatique</Text>
                    </View>
                </View>
                <View style={[styles.footer, { height: height / 3 }]}>
                    <View style={[styles.header]}>
                        <Text style={[styles.titleInput, { fontSize: 15 }]}>CRÉER OU RÉINITIALISER MON MOT DE PASSE</Text>
                    </View>
                    {/* button login */}
                    <View style={[styles.body, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable]}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>SE CONNECTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}