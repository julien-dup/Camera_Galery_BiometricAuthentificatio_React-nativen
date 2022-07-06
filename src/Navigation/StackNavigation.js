import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilScreen from '../screens/ProfilScreen';
import Galery from '../screens/galery';
import Login from '../screens/loginScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='profil' component={ProfilScreen} />
                <Stack.Screen name='galerie' component={Galery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav