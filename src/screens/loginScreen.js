import React from "react";
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'

import TouchID from 'react-native-touch-id'

const Login = ({navigation}) => {

    const optionalConfigObject = {
        title: 'Authentication Required', // Android
        imageColor: '#e00606', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };

    const pressHandler = () => {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        console.log('login ok')
        navigation.navigate({name: 'profil'})
        
      })
      .catch(error => {
      });
    }

    return (
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Welcome to your app</Text>  
            <Text style={styles.text}>photo</Text>
            <Text style={{marginTop:32}}>Please login under</Text>
          </View>
          <TouchableHighlight onPress={() => pressHandler()}>
            <Text style={{marginTop:32}}>
              Authenticate with Touch ID
            </Text>
          </TouchableHighlight>
        </View>
      );
}

export default Login

const styles = StyleSheet.create({
  text: {
    fontSize: 32
  }
})