import React from 'react'
import {} from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import QRCodeScreen from './src/screens/QRCodeScreen'

export default class App extends React.Component {
  render(){
    return(
      <QRCodeScreen />
    )
  }
}