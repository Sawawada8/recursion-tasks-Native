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
import 'react-native-gesture-handler';

// calendar conf
import './utils/CalendarConfig'

const Src = () => {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default Src;
