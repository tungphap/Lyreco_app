import React from 'react'
import {
    View, Text,
    TouchableOpacity, Dimensions,
    ScrollView, TextInput, Image,
    CheckBox, Alert, ActivityIndicator, AsyncStorage
} from 'react-native'
import Logo from '../images/LYRECO.png'
import styles from '../style'
import global from '../global'
import loginApi from '../api/LoginApi'
const { width, height } = Dimensions.get('window');
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            auto: false,
            animating: false
        }
    }

    login = () => {
        const { email, password } = this.state;
        if (email.length <= 0 || password.length <= 0) {
            Alert.alert('Attention', 'Veuillez saisir votre compte et votre mot de passe !')
        } else {
            this.setState({ animating: true })
            const params = { email: email, password: password }
            loginApi(`${global.url}${'v1/auth/login/app'}`, params).then(
                data => {
                    if (data !== null && data !== undefined) {
                        this.setState({ animating: false })
                        this.props.navigation.navigate('HomePage')
                    } else {
                        this.setState({ animating: false })
                        Alert.alert('Attention !', 'Compte ou mot de passe incorrect. Saisir à nouveau');
                    }
                }
            )
        }
    }

    autoConnect = () => {
        this.setState({ auto: !this.state.auto })
    }

    render() {
        return (
            <ScrollView>
                {/* logo company */}
                <View style={styles.header}>
                    <Image source={Logo} style={{ width: width, height: height / 3 }}></Image>
                </View>
                {/* form input login in here */}
                <View style={styles.body}>
                    {/* input email */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.titleInput}>Identifiant:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(email) => this.setState({ email: email })}>
                        </TextInput>
                    </View>
                    {/* input password */}
                    <View style={styles.inputGroup}>
                        <Text style={[styles.titleInput]}>Mot de passe:</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password: password })}>
                        </TextInput>
                    </View>
                    <View style={[styles.inputGroup, { flexDirection: 'row', alignItems: 'center' }]}>
                        <CheckBox
                            onValueChange={this.autoConnect}
                            value={this.state.auto}></CheckBox>
                        <Text style={{ color: '#2d2e87', fontFamily: 'GothamMedium' }}>Connexion automatique</Text>
                    </View>
                </View>
                <View style={[styles.footer, { height: height / 3 }]}>
                    <View style={[styles.header, { justifyContent: 'flex-end' }]}>
                        <Text style={[styles.titleInput, { fontSize: 15, letterSpacing: 1 }]}>CRÉER OU RÉINITIALISER MON MOT DE PASSE</Text>
                    </View>

                    {/* button login */}
                    <View style={[styles.footer, { width: '100%' }]}>
                        <TouchableOpacity style={[styles.btnTouchable, { width: '65%', flexDirection: 'row' }]}
                            onPress={this.login}>
                            <Text style={{ color: '#fff', fontSize: 25, fontFamily: 'GothamMedium' }}>SE CONNECTER</Text>
                            <ActivityIndicator
                                animating={this.state.animating}
                                size="small"
                                color="#fff"
                                style={{ display: this.state.animating ? 'flex' : 'none', marginLeft: 15 }} >
                            </ActivityIndicator>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}