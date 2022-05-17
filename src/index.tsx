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
import { SSRProvider } from '@react-aria/ssr';
import AppNavigation from './navigations/AppNavigation';
import 'react-native-gesture-handler';

// uuid
import 'react-native-get-random-values'

// calendar conf
import './utils/CalendarConfig'

import TestScreen from './screens/TestScreen';

const test = false;

const Src = () => {
  if (test) {
    return (
      <SSRProvider>
        <NativeBaseProvider>
          <TestScreen />
        </NativeBaseProvider>
      </SSRProvider>
    )
  }
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </SSRProvider>
  );
};

export default Src;
