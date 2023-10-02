import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
   const {reset} = useResetNavigationSuccess();
   function submitForm() {
      //TUDO:implementar
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
         <TextInput
            label="Seu username"
            placeholder="@"
            boxProps={{mb: 's20'}}
         />
         <TextInput
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            boxProps={{mb: 's20'}}
         />
         <TextInput
            label="E-mail"
            placeholder="Digite seu E-mail"
            boxProps={{mb: 's20'}}
         />

         <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's40'}}
         />
         <PasswordInput
            label="Nova Senha"
            placeholder="Digite sua Nova senha"
            boxProps={{mb: 's40'}}
         />

         <Button title="Crie sua conta" onPress={submitForm} />
      </Screen>
   );
}
