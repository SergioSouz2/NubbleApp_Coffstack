import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Routes() {
   const authenticated = true;

   return (
      <>
         <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
            translucent
         />
         <NavigationContainer>
            {authenticated ? <AppStack /> : <AuthStack />}
         </NavigationContainer>
      </>
   );
}
