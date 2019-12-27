import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Alert, Animated, Easing, ScrollView } from 'react-native'
import { RNCamera } from 'react-native-camera'
import styles from '../style'

const { width, height } = Dimensions.get('window')
export default class ScannerScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animated: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this.moveAnimation()
    }

    moveAnimation = () => {//component di chuyen
        Animated.timing(this.state.animated, {
            toValue: (height / 2) * 0.88,
            duration: 2000,
        }).start(() => {
            //call after finish this animation
            Animated.timing(this.state.animated, {
                toValue: 0,
                duration: 2000,
            }).start(() => {
                this.moveAnimation()
            });
        });
    }

    onScan = (e) => {
        Alert.alert("Barcode value is " + e.data, "Barcode type is" + e.type);
    }
    render() {
        return (
            <View style={[styles.container, { height: height, flex: 0 }]}>
                <ScrollView>
                    <View style={[styles.header, { height: height / 4, flex: 0 }]}>
                        <Text style={[styles.textTitle, { letterSpacing: 0, textShadowRadius: 0 }]}>Merci de bien vouloir{`\n`} scanner le QRcode</Text>
                        <Text style={{ color: '#2d2e87' }}>Qui se trouve au dos de votre captuer</Text>
                    </View>
                    <View style={[styles.body, { height: height / 2, flex: 0 }]}>
                        <RNCamera
                            onBarCodeRead={this.onScan}
                            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                            style={[styles.QRCamera]}>
                            <View style={{ backgroundColor: 'transparent', width: '90%', height: '90%' }}>
                                <Animated.View
                                    style={{
                                        width: '100%',
                                        height: 5,
                                        backgroundColor: '#fff',
                                        opacity: 0.3,
                                        zIndex: 1,
                                        marginTop: this.state.animated
                                    }}>
                                </Animated.View>

                                <View style={[styles.angleViewScanWidth, { top: -3, left: -3 }]}></View>
                                <View style={[styles.angleViewScanHeight, { left: -3 }]}></View>

                                <View style={[styles.angleViewScanWidth, { right: -3, top: -3 }]}></View>
                                <View style={[styles.angleViewScanHeight, { right: -3, top: 0 }]}></View>

                                <View style={[styles.angleViewScanWidth, { left: -3, bottom: 0 }]}></View>
                                <View style={[styles.angleViewScanHeight, { left: -3, bottom: 0 }]}></View>

                                <View style={[styles.angleViewScanWidth, { right: -3, bottom: 0 }]}></View>
                                <View style={[styles.angleViewScanHeight, { right: -3, bottom: 0 }]}></View>
                            </View>
                        </RNCamera>
                    </View>
                    <View style={[styles.footer, { height: height / 4, flex: 0 }]}>
                        <TouchableOpacity style={styles.btnTouchable}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>SCANNING...</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}