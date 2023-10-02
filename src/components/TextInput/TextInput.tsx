import React, {useRef} from 'react';
import {
   Pressable,
   TextInput as RNTextInput,
   TextInputProps as RNTextInputProps,
   TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
   label: string;
   errorMessage?: string;
   RightComponet?: React.ReactElement;
   boxProps: BoxProps;
}

export function TextInput({
   label,
   errorMessage,
   RightComponet,
   boxProps,
   ...rntextInputProps
}: TextInputProps) {
   const {colors} = useAppTheme();
   const inputRef = useRef<RNTextInput>(null);

   const $textInputcontainer: BoxProps = {
      flexDirection: 'row',
      borderWidth: errorMessage ? 2 : 1,
      borderColor: errorMessage ? 'error' : 'gray4',
      borderRadius: 's12',
      padding: 's16',
   };

   function focusInput() {
      inputRef.current?.focus();
   }

   return (
      <Box {...boxProps}>
         <Pressable onPress={focusInput}>
            <Text
               preset="paragraphMedium"
               marginBottom="s4"
               color="backgroundContrast">
               {label}
            </Text>
            <Box {...$textInputcontainer}>
               <RNTextInput
                  ref={inputRef}
                  placeholderTextColor={colors.gray2}
                  style={$textInputStyle}
                  {...rntextInputProps}
               />
               {RightComponet && (
                  <Box ml="s16" justifyContent="center">
                     {RightComponet}
                  </Box>
               )}
            </Box>

            {errorMessage && (
               <Text color="error" bold preset="paragraphSmall">
                  {errorMessage}
               </Text>
            )}
         </Pressable>
      </Box>
   );
}

const $textInputStyle: TextStyle = {
   flexGrow: 1,
   flexShrink: 1,
   padding: 0,
   fontFamily: $fontFamily.regular,
   ...$fontSizes.paragraphMedium,
};
