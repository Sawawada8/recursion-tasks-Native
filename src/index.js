import React from 'react';

import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
} from 'native-base';
import AppNavigation from './navigations/AppNavigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  )
}

export default App