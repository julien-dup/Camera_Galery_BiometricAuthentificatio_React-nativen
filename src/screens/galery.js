import React, { useEffect, useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';

import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";


const Galery = ({navigation}) => {

  

    const Permission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
          title: "Storage Permission",
          message: "Storage Permission is needed to access your photos",
          buttonPositive: "OK"
        }).then(() => {
          console.log("Storage Permission Granted");
        }
        ).catch(err => {
          console.log("Storage Permission Denied");
        }
        );
      }
      
        const  picture = async () => {
        await CameraRoll.getPhotos({
          first: 10,
          assetType: 'Photos',
        })
        .then(r => {
          setPhotos(r.edges)
         })
         .catch(err => {
          console.log(err);
          }
        );
      }

      useEffect(() => {
        picture()
        Permission()
        setPhotos(photo)
      }
      , [photo])

    const [photo, setPhotos] = useState ([])


   

    
    
 
    return(
        <View style={{flex: 2}}>
            <Text>Galerie</Text>
          
            <ScrollView style={{flex: 1, backgroundColor: 'red'}}>  
       {photo.map((p, i) => {
        {console.log(p.node.image.uri)}
       return (
        
         <Image
           key={i}
           style={{
             width: 150,
             height: 150, 
             backgroundColor: 'grey', 
             marginTop: 8    
           }}
           source={{uri: p.node.image.uri }}   
         />
       );
     })}

     </ScrollView>

            <Text>Test</Text>
        </View>
    )
  }

  export default Galery

  const styles = StyleSheet.create({
    photos: {
        width: 150,
        height: 150
    }
  })



