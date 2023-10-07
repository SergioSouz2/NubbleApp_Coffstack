import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';
import {SettingsScreen} from '@screens';

export type AppStackParamList = {
   AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
   SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
   return (
      <Stack.Navigator
         initialRouteName="AppTabNavigator"
         screenOptions={{
            headerShown: false,
            fullScreenGestureEnabled: true,
         }}>
         <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
         <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
   );
}
