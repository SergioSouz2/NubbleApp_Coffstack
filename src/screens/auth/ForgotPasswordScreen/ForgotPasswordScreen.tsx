import React from 'react';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {FormTextInput} from '../../../components/Form/FormTextInput';

import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {
   ForgotPasswordSchema,
   forgotPasswordSchema,
} from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<
   RootStackParamList,
   'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
   const {reset} = useResetNavigationSuccess();

   const {control, handleSubmit, formState} = useForm<ForgotPasswordSchema>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
         email: '',
      },
      mode: 'onChange',
   });

   function submitForm(values: ForgotPasswordSchema) {
      console.log(values);

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

         <FormTextInput
            control={control}
            name={'email'}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's40'}}
         />

         <Button
            disabled={!formState.isValid}
            onPress={handleSubmit(submitForm)}
            title="Recuperar senha"
         />
      </Screen>
   );
}
