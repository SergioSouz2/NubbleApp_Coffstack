import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
   function navigationToSignUpScreen() {
      navigation.navigate('SignUpScreen');
   }

   function navigationToForgotScreen() {
      navigation.navigate('ForgotPasswordScreen');
   }

   return (
      <Screen>
         <Text preset="headingLarge" marginBottom="s8">
            Olá!
         </Text>

         <Text preset="paragraphLarge" marginBottom="s40">
            Digite seu e-mail e senha para entrar
         </Text>

         <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
         />

         <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's20'}}
         />

         <Text
            onPress={navigationToForgotScreen}
            color="primary"
            preset="paragraphSmall"
            bold>
            Esqueci minha senha
         </Text>

         <Button title="Entrar" mt="s48" />
         <Button
            title="Criar uma conta"
            preset="outline"
            mt="s12"
            onPress={navigationToSignUpScreen}
         />
      </Screen>
   );
}
