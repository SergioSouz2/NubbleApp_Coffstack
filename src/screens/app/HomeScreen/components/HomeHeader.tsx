import React from 'react';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {SimpleLogo} from '@brand';

export function HomeHeader() {
   const {top} = useAppSafeArea();

   return (
      <Box style={{paddingTop: top}} {...$wrapper}>
         <SimpleLogo width={70} />
         <Box flexDirection="row">
            <Box marginRight="s24">
               <Icon name="search" />
            </Box>
            <Box marginRight="s24">
               <Icon name="bell" />
            </Box>
            <Icon name="comment" />
         </Box>
      </Box>
   );
}

const $wrapper: BoxProps = {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingHorizontal: 's24',
   paddingBottom: 's24',
};
