import React from 'react'
import { View, Text, TouchableOpacity, Image, Picker, Dimensions, ScrollView, ToastAndroid } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import backicon from '../images/backicon.png'
import styles from '../style'

const { width, height } = Dimensions.get('window')
export default class SetInformations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Stock: { ramette: false, carton: false },
            Papier: { A4: false, A3: false },
            Offre: { basic: false, premium: false },
            Ref_article: null,
            Valider_success: false
        }
    }

    setStock_ramette = async () => {
        await this.setState({ Stock: { ramette: !this.state.Stock.ramette, carton: false } })
        await this.checkValider()
    }
    setStock_carton = async () => {
        await this.setState({ Stock: { ramette: false, carton: !this.state.Stock.carton, } })
        await this.checkValider()
    }

    setPapier_A4 = async () => {
        await this.setState({ Papier: { A4: !this.state.Papier.A4, A3: false } })
        await this.checkValider()
    }

    setPapier_A3 = async () => {
        await this.setState({ Papier: { A3: !this.state.Papier.A3, A4: false } })
        await this.checkValider()
    }

    setOffre_basic = async () => {
        await this.setState({ Offre: { basic: !this.state.Offre.basic, premium: false } })
        await this.checkValider()
    }

    setOffre_premium = async () => {
        await this.setState({ Offre: { premium: !this.state.Offre.premium, basic: false } })
        await this.checkValider()
    }

    checkValider = () => {
        if (this.state.Stock.ramette == false & this.state.Stock.carton == false ||
            this.state.Papier.A4 == false & this.state.Papier.A3 == false ||
            this.state.Offre.basic == false & this.state.Offre.premium == false ||
            this.state.Ref_article == null) {

            this.setState({ Valider_success: false })


        } else {
            this.setState({ Valider_success: true })
        }
    }

    render() {
        return (
            <ScrollView >
                <View style={[styles.header, { height: height / 4 }]}>
                    <Text style={[styles.textBlue, { fontSize: 20, fontFamily: 'GothamLight' }]}>Votre capteur a bien été reconnu par le réseau.</Text>
                    <Text style={[styles.textTitle]}>MERCI D'INDIQUER:</Text>
                </View>
                <View style={[styles.body, { height: height / 2 }]}>
                    {/* set value Stock */}
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Stock:</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            {/* Ramette button */}
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Stock.ramette ? '#2d2e87' : '#f9f9f9' }]}
                                onPress={this.setStock_ramette}>
                                <Text style={[styles.titleBtnSetInfo, { color: this.state.Stock.ramette ? '#fff' : '#999999' }]}>Ramette</Text>
                            </TouchableOpacity>
                            <View style={{ width: '10%', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#6600ff' }}>\</Text>
                            </View>
                            {/* Carton button */}
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Stock.carton ? '#2d2e87' : '#f9f9f9' }]}
                                onPress={this.setStock_carton}>
                                <Text style={[styles.titleBtnSetInfo, { color: this.state.Stock.carton ? '#fff' : '#999999' }]}>Carton</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* set value Papier */}
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Papier:</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            {/* A4 button */}
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Papier.A4 ? '#2d2e87' : '#f9f9f9' }]}
                                onPress={this.setPapier_A4}>
                                <Text style={[styles.titleBtnSetInfo, { color: this.state.Papier.A4 ? '#fff' : '#999999' }]}>A4</Text>
                            </TouchableOpacity>
                            <View style={{ width: '10%', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#6600ff' }}>\</Text>
                            </View>
                            {/* A3 button */}
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Papier.A3 ? '#2d2e87' : '#f9f9f9' }]}
                                onPress={this.setPapier_A3}>
                                <Text style={[styles.titleBtnSetInfo, { color: this.state.Papier.A3 ? '#fff' : '#999999' }]}>A3</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* set value Offre */}
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Offre:</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                            {/* Basic button */}
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Offre.basic ? '#2d2e87' : '#f9f9f9' }]}
                                onPress={this.setOffre_basic}>
                                <Text style={[styles.titleBtnSetInfo, { color: this.state.Offre.basic ? '#fff' : '#999999' }]}>Basic</Text>
                            </TouchableOpacity>
                            <View style={{ width: '10%', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#6600ff' }}>\</Text>
                            </View>
                            {/* Premium button */}
                            <TouchableOpacity
                                style={[styles.btnSetInfo, { backgroundColor: this.state.Offre.premium ? '#2d2e87' : '#f9f9f9' }]}
                                onPress={this.setOffre_premium}>
                                <Text style={[styles.titleBtnSetInfo, { color: this.state.Offre.premium ? '#fff' : '#999999' }]}>Premium</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* set value Ref Article */}
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.titleInput}>Ref article:</Text>
                        <View style={[styles.header, styles.btnSetInfo, { marginTop: 5, borderRadius: 15, padding: 15 }]}>
                            {/* Picker value */}
                            <Picker
                                selectedValue={this.state.Ref_article}
                                style={styles.listChoisir}
                                onValueChange={async (itemValue) => {
                                    await this.setState({ Ref_article: itemValue })
                                    await this.checkValider()
                                }
                                }>
                                <Picker.Item label="Choisir . . ." value={null} color='#2d2e87'  />
                                <Picker.Item label="Ref: XXXXXXX" value="abc" color='#2d2e87'  />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={[styles.footer, { height: height / 5 }]}>
                    <Text style={[styles.textRed, { fontFamily: 'GothamLight', fontSize: 15, display: this.state.Valider_success ? 'none' : 'flex' }]}>(Vous devez impérativement indiquer un choix par item)</Text>
                    <Text></Text>
                    <View style={[{ flexDirection: 'row' }]}>
                        {/* RETOUR button */}
                        <TouchableOpacity
                            style={[styles.btnTouchable, { backgroundColor: '#fff', width: '35%', flexDirection: "row", display: this.state.Valider_success ? 'flex' : 'none' }]}
                            onPress={() => {
                                this.props.navigation.navigate('Valider')
                            }}>
                            <Image source={backicon} style={{ width: 15, height: 15 }} />
                            <Text style={[styles.titleBtn, { color: '#9bc31c', fontSize: 20 }]}> RETOUR</Text>
                        </TouchableOpacity>
                        <View style={{ width: '3%', display: this.state.Valider_success ? 'flex' : 'none' }}></View>
                        {/* VALIDER button */}
                        <TouchableOpacity style={[styles.btnTouchable, { width: this.state.Valider_success ? '35%' : '70%' }]}
                            onPress={() => {
                                if (this.state.Valider_success == true) {
                                    this.props.navigation.navigate('Finish')
                                }
                            }}>
                            <Text style={[styles.titleBtn, { fontSize: 20 }]}>VALIDER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
