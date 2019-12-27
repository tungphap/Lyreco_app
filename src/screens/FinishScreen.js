import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import styles from '../style'
import finishIC from '../images/finish.png'

const { width, height } = Dimensions.get('window')
export default class FinishScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, { flex: 2 }]}>
                    <Image source={finishIC} style={{ width: 250, height: 250 }}></Image>
                    <Text></Text>
                    <Text style={[styles.textBlue]}>
                        L'installation de votre capteur est terminée,{`\n`}
                        vous pouvez passer au suivant.
                    </Text>
                </View>
                <View style={[styles.body]}>
                    <View style={[styles.body, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable]}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>FIN D'INSTALLATION</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}