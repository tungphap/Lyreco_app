import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../style'

const { width, height } = Dimensions.get('window')
export default class ValiderScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <View style={styles.header}>
                        <Text style={[styles.textBlue, { fontSize: 30 }]}>Vous avez scanné:</Text>
                        <Text></Text>

                    </View>
                </View>
                <View style={[styles.body, {justifyContent: 'flex-start'}]}>
                    {/* content body ? */}
                    <Text style={[styles.textBlue, { fontSize: 30 }]}>Le capteur</Text>
                    <Text style={styles.textRed}>N° XXXXX</Text>
                </View>

                <View style={[styles.footer]}>
                    <View style={[styles.header, { width: '100%' }]}>
                        <Text style={styles.textBlue}>Vous pouvez le pré-positionner{`\n`}et appuyer sur le bouton du captuer </Text>
                    </View>
                    <View style={[styles.body, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable, { height: '60%' }]}>
                            <Text style={styles.titleBtn}>VALIDER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.footer, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable, { height: '60%' }]}>
                            <Text style={styles.titleBtn}>RE-SCANNER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}