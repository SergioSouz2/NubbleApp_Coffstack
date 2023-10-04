import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {RootStackParamList} from '../../../routes/Routes';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {useForm} from 'react-hook-form';

import {SignSchema, signUpSchema} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
   const {reset} = useResetNavigationSuccess();
   const {control, formState, handleSubmit} = useForm<SignSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues: {
         userName: '',
         fullName: '',
         email: '',
         password: '',
      },
      mode: 'onChange',
   });

   function submitForm(formValues: SignSchema) {
      console.log(formValues);
      reset({
         title: 'Sua conta foi criada com sucesso!',
         description: 'Agora é so fazer login na nossa paltaforma',
         icon: {
            name: 'checkRound',
            color: 'success',
         },
      });
   }

   return (
      <Screen canGoBack scrollable>
         <Text preset="headingLarge" mb="s32">
            Criar um conta
         </Text>

         <FormTextInput
            control={control}
            name="userName"
            label="Seu username"
            placeholder="@"
            boxProps={{mb: 's20'}}
         />

         <FormTextInput
            control={control}
            name="fullName"
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            boxProps={{mb: 's20'}}
         />

         <FormTextInput
            control={control}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
         />

         <FormPasswordInput
            control={control}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's40'}}
         />

         <Button
            disabled={!formState.isValid}
            title="Crie sua conta"
            onPress={handleSubmit(submitForm)}
         />
      </Screen>
   );
}
