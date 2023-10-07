import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// import {AppScreenProps} from '@routes';

export function FavoriteScreen({
   navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
   return (
      <Screen>
         <Text preset="headingLarge">Favorite Screen</Text>
      </Screen>
   );
}
