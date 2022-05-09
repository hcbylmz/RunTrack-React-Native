import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../../Screens/LoginScreen';
import RegisterScreen from '../../../Screens/RegisterScreen';
import routes from '../../routes';
import {NavigationContainer} from '@react-navigation/native';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
