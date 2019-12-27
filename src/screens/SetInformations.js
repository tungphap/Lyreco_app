import React from 'react'
import { View, Text, TouchableOpacity, Image, Picker, Dimensions, ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import backicon from '../images/backicon.png'
import styles from '../style'

const { width, height } = Dimensions.get('window')
export default class SetInformations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Stock: null,
            Papier: '',
            Offre: '',
        }
    }

    setStock = () => {
        this.setState({ Stock: !this.state.Stock })
    }


    render() {
        return (
            <ScrollView >
                <View style={[styles.header, { height: height / 4 }]}>
                    <Text style={[styles.textBlue, { fontSize: 20 }]}>Votre capteur a bien été reconnu par le réseau.</Text>
                    <Text style={[styles.textTitle, { textShadowRadius: 0, letterSpacing: 0 }]}>MERCI D'INDIQUER:</Text>
                </View>
                <View style={[styles.body, { height: height / 2 }]}>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Stock:</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Stock ? 'blue' : '#f2f2f2' }]}
                                onPress={this.setStock}>
                                <Text style={[styles.titleBtnSetInfo,{ color: this.state.Stock ? '#fff' : '#999999' }]}>Ramette</Text>
                            </TouchableOpacity>
                            <View style={{ width: '10%', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#6600ff' }}>\</Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.btnSetInfo]}>
                                <Text style={styles.titleBtnSetInfo}>Carton</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Papier:</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <TouchableOpacity style={styles.btnSetInfo}>
                                <Text style={styles.titleBtnSetInfo}>A4</Text>
                            </TouchableOpacity>
                            <View style={{ width: '10%', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#6600ff' }}>\</Text>
                            </View>
                            <TouchableOpacity style={styles.btnSetInfo}>
                                <Text style={styles.titleBtnSetInfo}>A3</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Offre:</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <TouchableOpacity style={styles.btnSetInfo}>
                                <Text style={styles.titleBtnSetInfo}>Basic</Text>
                            </TouchableOpacity>
                            <View style={{ width: '10%', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#6600ff' }}>\</Text>
                            </View>
                            <TouchableOpacity style={styles.btnSetInfo}>
                                <Text style={styles.titleBtnSetInfo}>Premium</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Ref article:</Text>
                        <View style={[styles.header, styles.btnSetInfo, { marginTop: 5, borderRadius: 15, padding: 15 }]}>
                            <Picker
                                selectedValue={this.state.language}
                                style={styles.listChoisir}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="Choisir..." value={null} />
                                <Picker.Item label="Ref: XXXXXXX" value="?" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={[styles.footer, { height: height / 5 }]}>
                    <Text style={[styles.textRed, { fontWeight: 'normal', fontSize: 15 }]}>(Vous devez impérativement indiquer un choix par item)</Text>
                    <Text></Text>
                    <View style={[{ flexDirection: 'row' }]}>
                        <TouchableOpacity style={[styles.btnTouchable, { width: '35%', flexDirection: "row" }]}>
                            <Image source={backicon} style={{ width: 30, height: 30 }} />
                            <Text style={styles.titleBtn}>RETOUR</Text>
                        </TouchableOpacity>
                        <View style={{ width: '5%' }}></View>
                        <TouchableOpacity style={[styles.btnTouchable, { width: '40%' }]}>
                            <Text style={styles.titleBtn}>VALIDER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
