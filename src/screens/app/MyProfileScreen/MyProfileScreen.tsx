import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// import {AppScreenProps} from '@routes';

export function MyProfileScreen({
   navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
   return (
      <Screen>
         <Text preset="headingLarge">MyProfile Screen</Text>
      </Screen>
   );
}
