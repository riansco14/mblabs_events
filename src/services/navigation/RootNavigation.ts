import { StackActions, createNavigationContainerRef } from '@react-navigation/native';
import { AuthStackParam } from '../../config/navigation/routes';

export const navigationRef = createNavigationContainerRef<AuthStackParam>()


export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}



export function pop(amountScreens: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(amountScreens))
  }
}