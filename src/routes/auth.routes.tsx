import React from 'react'
import { Login } from '../screens/Login'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()


export function AuthRoutes() {
    return (
        <Navigator>
            <Screen
                name="Login"
                component={Login}
            />
        </Navigator>
    )
}