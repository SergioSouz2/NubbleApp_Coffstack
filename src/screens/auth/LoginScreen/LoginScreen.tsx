import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Controller, useForm} from 'react-hook-form';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Alert} from 'react-native';

export type LoginFormType = {
   email: string;
   password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
   function navigationToSignUpScreen() {
      navigation.navigate('SignUpScreen');
   }

   function navigationToForgotScreen() {
      navigation.navigate('ForgotPasswordScreen');
   }

   function submitForm({email, password}: LoginFormType) {
      Alert.alert(`Email: ${email} ${`\n`} senha: ${password}`);
   }

   const {control, formState, handleSubmit} = useForm<LoginFormType>({
      defaultValues: {
         email: '',
         password: '',
      },
      mode: 'onChange',
   });

   return (
      <Screen>
         <Text preset="headingLarge" marginBottom="s8">
            Olá!
         </Text>

         <Text preset="paragraphLarge" marginBottom="s40">
            Digite seu e-mail e senha para entrar
         </Text>

         <Controller
            control={control}
            name="email"
            rules={{
               required: 'E-mail obrigatório',
               pattern: {
                  value: /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/,
                  message: 'E-mail inválido',
               },
            }}
            render={({field, fieldState}) => (
               <TextInput
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                  onChangeText={field.onChange}
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  boxProps={{mb: 's20'}}
               />
            )}
         />

         <Controller
            control={control}
            name="password"
            rules={{
               required: 'Senha obrigatório',
               minLength: 8,
            }}
            render={({field, fieldState}) => (
               <PasswordInput
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                  onChangeText={field.onChange}
                  label="Senha"
                  placeholder="Digite sua senha"
                  boxProps={{mb: 's10'}}
               />
            )}
         />

         <Text
            onPress={navigationToForgotScreen}
            color="primary"
            preset="paragraphSmall"
            bold>
            Esqueci minha senha
         </Text>

         <Button
            title="Entrar"
            mt="s48"
            onPress={handleSubmit(submitForm)}
            disabled={!formState.isValid}
         />
         <Button
            title="Criar uma conta"
            preset="outline"
            mt="s12"
            onPress={navigationToSignUpScreen}
         />
      </Screen>
   );
}
