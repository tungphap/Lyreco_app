import React from 'react'
import {} from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import QRCodeScreen from './src/screens/QRCodeScreen'
import ScannerScreen from './src/screens/ScannerScreen'
import ValiderScreen from './src/screens/ValiderScreen'
import ValiderSuccess from './src/screens/ValiderSuccess'
import ValiderFail from './src/screens/ValiderFail'
import SetInformations from './src/screens/SetInformations'
import FinishScreen from './src/screens/FinishScreen'
export default class App extends React.Component {
  render(){
    return(
      <LoginScreen />
    )
  }
}