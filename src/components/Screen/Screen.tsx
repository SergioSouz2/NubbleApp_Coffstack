import React from 'react';

import {Box, TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
   children: React.ReactNode;
   canGoBack?: boolean;
   scrollable?: boolean;
}

export function Screen({
   children,
   canGoBack = false,
   scrollable = false,
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
               paddingBottom="s24"
               paddingHorizontal="s20"
               style={{paddingTop: top, paddingBottom: bottom}}
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
