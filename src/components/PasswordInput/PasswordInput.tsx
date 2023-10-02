import React, {useState} from 'react';

import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponet'>;

export function PasswordInput(props: PasswordInputProps) {
   const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
   function toggleSecureTextEntry() {
      setIsSecureTextEntry(prev => !prev);
   }
   return (
      <TextInput
         {...props}
         secureTextEntry={isSecureTextEntry}
         RightComponet={
            <Icon
               onPress={toggleSecureTextEntry}
               color="gray2"
               name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
            />
         }
      />
   );
}
