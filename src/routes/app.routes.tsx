import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard } from '../screens/Dashboard'

const { Navigator, Screen } = createStackNavigator()


export function AppRoutes() {
    return (
        <Navigator  screenOptions={{headerShown: false}}>
            <Screen
                name="Dashboard"
                component={Dashboard}
            />
        </Navigator>
    )
}