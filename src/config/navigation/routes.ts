import type { CompositeNavigationProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp  } from '@react-navigation/bottom-tabs';

type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
}


type AppStackParamList = {
    Dashboard: undefined;
}

export type AuthStackParam = CompositeNavigationProp<StackNavigationProp<AuthStackParamList>, BottomTabNavigationProp<AppStackParamList>>