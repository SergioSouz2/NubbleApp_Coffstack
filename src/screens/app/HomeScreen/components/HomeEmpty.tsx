import {ActivityIndicator, Box, Button, Text} from '@components';
import React from 'react';

interface Props {
   loading: boolean;
   error: unknown;
   refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
   let component = (
      <Text bold preset="paragraphMedium">
         Não há publicacoes no seu feed{' '}
      </Text>
   );

   if (loading) {
      component = <ActivityIndicator color="primary" />;
   }

   if (error) {
      component = (
         <>
            <Text bold preset="paragraphMedium" marginBottom="s16">
               Não foi possivel carregar o feed{' '}
            </Text>
            <Button title="Recarregar" preset="outline" onPress={refetch} />
         </>
      );
   }
   return (
      <Box flex={1} justifyContent="center" alignItems="center">
         {component}
      </Box>
   );
}
