import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
   RootStackParamList,
   'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
   const {reset} = useResetNavigationSuccess();

   function submitForm() {
      //TUDO: submit form

      reset({
         title: 'Enviamos as instrucoes para seu e-mail',
         description:
            'Click no link enviado no seu e-mail para recuperar sua senha',
         icon: {
            name: 'messageRound',
            color: 'primary',
         },
      });
   }
   return (
      <Screen canGoBack>
         <Text preset="headingLarge" mb="s16">
            Esqueci minha senha
         </Text>
         <Text preset="paragraphLarge" mb="s32">
            Digite seu e-mail e enviaremos as instrucoes para redefinicao de
            senha
         </Text>

         <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's40'}}
         />

         <Button onPress={submitForm} title="Recuperar senha" />
      </Screen>
   );
}
