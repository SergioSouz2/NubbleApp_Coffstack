import React from 'react';
import {Alert} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {FormTextInput} from '../../../components/Form/FormTextInput';

import {loginSchema, LoginSchema} from './loginSchima';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
   function navigationToSignUpScreen() {
      navigation.navigate('SignUpScreen');
   }

   function navigationToForgotScreen() {
      navigation.navigate('ForgotPasswordScreen');
   }

   function submitForm({email, password}: LoginSchema) {
      Alert.alert(`Email: ${email} ${`\n`} senha: ${password}`);
   }

   const {control, formState, handleSubmit} = useForm<LoginSchema>({
      resolver: zodResolver(loginSchema),
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

         <FormTextInput
            control={control}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
         />

         <FormTextInput
            control={control}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's10'}}
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
