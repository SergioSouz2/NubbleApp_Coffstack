import React from 'react';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
   ForgotPasswordSchema,
   forgotPasswordSchema,
} from './forgotPasswordSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({
   navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
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
