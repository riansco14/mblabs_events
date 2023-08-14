import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { navigationRef } from '../services/navigation/RootNavigation';



export function Routes() {

    return (
        <NavigationContainer ref={navigationRef}>
            {true ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}