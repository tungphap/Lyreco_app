import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Logo from '../images/LYRECO.png'
import styles from '../style'

const { width, height } = Dimensions.get('window');
export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={Logo} style={{ width: width, height: height / 3 }}></Image>
                </View>
                <View style={styles.body}>
                    <View style={[styles.header, { flex: 2 }]}>
                        <Text style={[styles.textTitle]}>BIENVENUE DANS</Text>
                        <Text style={{ fontWeight: 'bold', color: '#2d2e87' }}>I'application d'installation des captuers</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={[styles.E_Appro]}>
                            <Text style={{ fontWeight: 'bold', color: '#2d2e87', fontSize: 25 }}>E-Appro</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.footer, { height: height / 3 }]}>
                    <View style={[styles.body, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable]}
                            onPress={() => {
                                this.props.navigation.navigate('QRcode')
                            }}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>ENTRER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

