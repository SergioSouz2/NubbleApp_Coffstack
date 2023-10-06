import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '../components/Icon/Icon';

import {
   LoginScreen,
   SignUpScreen,
   SuccessScreen,
   ForgotPasswordScreen,
} from '@screens';

export type RootStackParamList = {
   LoginScreen: undefined;
   SignUpScreen: undefined;
   SuccessScreen: {
      title: string;
      description: string;
      icon: Pick<IconProps, 'name' | 'color'>;
   };
   ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
   return (
      <>
         <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
            translucent
         />
         <NavigationContainer>
            <Stack.Navigator
               initialRouteName="LoginScreen"
               screenOptions={{
                  headerShown: false,
               }}>
               <Stack.Screen name="LoginScreen" component={LoginScreen} />
               <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
               <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
               <Stack.Screen
                  name="ForgotPasswordScreen"
                  component={ForgotPasswordScreen}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}
