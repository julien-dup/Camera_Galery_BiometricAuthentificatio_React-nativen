import React, { useEffect, useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const ProfilScreen = ({navigation}) => {
  console.log('bonjour Julien')

  const openCamera = () => {
    const options ={
      storageOptions: {
        path: 'image',
        mediaType: 'image',
      },
    }
      launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled image picker')
      } else if (response.error) {
        console.log('image picker error', response.error)
      }else if (response.customButton) {
        console.log('user taped custom button,' + response.customButton)
      } else {
      const source= {uri: 'data:image/jpeg;base64,' + response.base64}
      console.log(response.assets[0].uri)
      setImgProfil(response.assets[0].uri)
      console.log(imgProfil)
      }
    })
  }
    
  const openImage = () => {
    const options ={
      storageOptions: {
        path: 'image',
        mediaType: 'image',
      },
    }
      launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user cancelled image picker')
      } else if (response.error) {
        console.log('image picker error', response.error)
      }else if (response.customButton) {
        console.log('user taped custom button,' + response.customButton)
      } else {
      console.log(response.assets[0].uri)
      setImgProfil(response.assets[0].uri)
      console.log(imgProfil)
      }
    })
  }

    
 
  const [imgProfil, setImgProfil] = useState ('https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc')

  useEffect(() => {
    setImgProfil(imgProfil)
  }
  , [imgProfil])

console.log('testy test ')

  return(
    <View>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 32}}>Profil</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: imgProfil}} style={styles.img} ></Image>
        {console.log(imgProfil)}
      </View>
      <Button
      title= 'Image'
      onPress={()=> openImage({
      })
      }></Button>
      <Button
      title= 'Caméra'
      onPress={()=>  openCamera(
      )}></Button>
    <Button
    title= 'Galerie'
    onPress={()=> 
    navigation.navigate({name: 'galerie'})}>

    </Button>

    </View>
  )
}

export default ProfilScreen;

const styles = StyleSheet.create({
  img: {
    height: 150, 
    width: 150
  }
})

