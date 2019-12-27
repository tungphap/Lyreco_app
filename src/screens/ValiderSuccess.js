import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import checkicon from '../images/checkicon.png'
import styles from '../style'

const { width, height } = Dimensions.get('window');
export default class ValiderSuccess extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, { flex: 2 }]}>
                    <Image source={checkicon} style={{ width: 250, height: 250 }}></Image>
                    <Text></Text>
                    <Text style={[styles.textBlue]}>
                        Votre capteur a bien été reconnu par{`\n`}
                        le réseau et envoie correctement les données
                    </Text>
                    <Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.pointView, { opacity: 0.2 }]}></View>
                        <View style={[styles.pointView, { opacity: 0.4 }]}></View>
                        <View style={[styles.pointView, { opacity: 0.6 }]}></View>
                        <View style={[styles.pointView, { opacity: 0.7 }]}></View>
                        <View style={[styles.pointView, { opacity: 1.0 }]}></View>
                    </View>
                </View>

                <View style={[styles.footer]}>
                    <View style={[styles.body, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable]}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>VALIDER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

