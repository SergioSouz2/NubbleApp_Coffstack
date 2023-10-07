import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// import {AppScreenProps} from '@routes';

export function NewPostScreen({
   navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
   return (
      <Screen>
         <Text preset="headingLarge">NewPost Screen</Text>
      </Screen>
   );
}
