import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
   children: React.ReactNode;
   canGoBack?: boolean;
   scrollable?: boolean;
}

export function Screen({
   children,
   canGoBack = false,
   scrollable = false,
   style,
}: ScreenProps) {
   const {top, bottom} = useAppSafeArea();
   const {colors} = useAppTheme();

   const navigation = useNavigation();

   const Container = scrollable ? ScrollViewContainer : ViewContainer;

   return (
      <KeyboardAvoidingView
         style={{flex: 1}}
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
         <Container backgroundColor={colors.background}>
            <Box
               paddingHorizontal="s20"
               style={[{paddingTop: top, paddingBottom: bottom}, style]}
               pb="s24">
               {canGoBack && (
                  <TouchableOpacityBox
                     onPress={navigation.goBack}
                     mb="s20"
                     flexDirection="row">
                     <Icon name="arrowLeft" size={24} color="primary" />
                     <Text preset="paragraphMedium" semiBold marginLeft="s8">
                        Voltar
                     </Text>
                  </TouchableOpacityBox>
               )}
               {children}
            </Box>
         </Container>
      </KeyboardAvoidingView>
   );
}
