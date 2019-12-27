import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import failIcon from '../images/failIcon.png'
import styles from '../style'

const { width, height } = Dimensions.get('window');
export default class ValiderFail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, { flex: 2 }]}> 
                    <Image source={failIcon} style={{ width: 250, height: 250 }}></Image>
                    <Text></Text>
                    <Text style={[styles.textRed]}>ATTENTION !</Text>
                    <Text style={[styles.textRed, { fontWeight: 'normal', fontSize: 15, letterSpacing: 1 }]}>Votre capteur n'a été reconnu par le réseau.{`\n`} Vous devez trouver un emplacement compatible</Text>

                </View>

                <View style={[styles.footer]}>
                    <View style={[styles.body, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable]}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>RE-SCANNER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

