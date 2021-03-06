import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import SignIn from '../screens/auth/signIn'
import SignUp from '../screens/auth/signUp'
import HomeBottomNavigator from './HomeBottomNavigator'

const Stack = createStackNavigator();

export default ()=>{
    return (
        <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen name = "SignIn" component={SignIn}/>
            <Stack.Screen name = "SignUp" component={SignUp} />
            <Stack.Screen name="HomeBottomNavigator" component={HomeBottomNavigator} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}