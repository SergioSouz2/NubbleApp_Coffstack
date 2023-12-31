import React from 'react';

import {buttonPresets} from './buttonPresets';
import {
   TouchableOpacityBox,
   TouchableOpacityBoxProps,
   Text,
   ActivityIndicator,
} from '@components';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
   title: string;
   loading?: boolean;
   preset?: ButtonPreset;
   disabled?: boolean;
}

export function Button({
   title,
   loading,
   disabled,
   preset = 'primary',
   ...touchableOpacityBoxProps
}: ButtonProps) {
   const buttonPreset =
      buttonPresets[preset][disabled ? 'disabled' : 'default'];

   return (
      <TouchableOpacityBox
         //backgroundColor="buttonPrimary"
         disabled={disabled || loading}
         paddingHorizontal="s20"
         height={50}
         justifyContent="center"
         alignItems="center"
         borderRadius="s16"
         {...buttonPreset.container}
         {...touchableOpacityBoxProps}>
         {loading ? (
            <ActivityIndicator color={buttonPreset.content} />
         ) : (
            <Text preset="paragraphMedium" bold color={buttonPreset.content}>
               {title}
            </Text>
         )}
      </TouchableOpacityBox>
   );
}
