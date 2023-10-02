import React from 'react';

import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from '@shopify/restyle';
import {Routes} from './src/routes/Routes';

function App(): JSX.Element {
   return (
      <SafeAreaProvider>
         <ThemeProvider theme={theme}>
            <Routes />
         </ThemeProvider>
      </SafeAreaProvider>
   );
}

export default App;
