import React from 'react'
import { Login } from '../screens/Login'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()


export function AuthRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="Login"
                component={Login}
            />
        </Navigator>
    )
}