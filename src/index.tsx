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

// uuid
import 'react-native-get-random-values'

// calendar conf
import './utils/CalendarConfig'

import TestScreen from './screens/TestScreen';

const test = false;

const Src = () => {
  if (test) {
    return (
      <NativeBaseProvider>
        <TestScreen />
      </NativeBaseProvider>
    )
  }
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default Src;
