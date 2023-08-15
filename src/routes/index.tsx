import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { navigationRef } from '../services/navigation/RootNavigation';
import { useAppSelector } from '../store/hook';



export function Routes() {
    const userLogged = useAppSelector((state) => state.user.userLogged);

    return (
        <NavigationContainer ref={navigationRef}>
            {userLogged && userLogged.id ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}