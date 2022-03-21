/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
} from 'react-native';
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
import NativeBaseIcon from './src/components/NativeBaseIcon';

import {Icon} from 'native-base';

import {G, Path} from 'react-native-svg';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <Center
            _dark={{bg: 'blueGray.900'}}
            _light={{bg: 'blueGray.50'}}
            px={4}
            flex={1}>
            <VStack space={5} alignItems="center">
              <NativeBaseIcon />
              <Heading size="lg">Welcome to NativeBase</Heading>
              <HStack space={2} alignItems="center">
                <Text>Edit</Text>
                <Code>App.js</Code>
                <Text>and save to reload.</Text>
              </HStack>
              <Link href="https://docs.nativebase.io" isExternal>
                <Text color="primary.500" underline fontSize={'xl'}>
                  Learn NativeBase
                </Text>
              </Link>
              <ToggleDarkMode />
              <ToggleDarkMode />
              <ToggleDarkMode />
              <ToggleDarkMode />
              <ToggleDarkMode />
              <ToggleDarkMode />
              <ToggleDarkMode />
              <Icon size="220px" viewBox="0 0 602.339 681.729">
                <G
                  id="Group_403"
                  data-name="Group 403"
                  transform="translate(14575 1918.542)">
                  <Path
                    id="Path_252"
                    data-name="Path 252"
                    d="M401.1,0A60.816,60.816,0,0,1,453.77,30.405L567.2,226.844a60.816,60.816,0,0,1,0,60.82L453.77,484.1A60.816,60.816,0,0,1,401.1,514.509H174.241A60.816,60.816,0,0,1,121.575,484.1L8.149,287.665a60.816,60.816,0,0,1,0-60.82L121.575,30.405A60.816,60.816,0,0,1,174.241,0Z"
                    transform="translate(-14016.576 -1865.281) rotate(90)"
                    fill="#1784b2"
                  />
                  <Path
                    id="_x3C__x2F__x3E_"
                    d="M187.066,335.455V297.993l-65.272-21.949,65.272-22.523V216.059L81,259.5v32.521Zm38.726,29.3L286.123,174H256.7l-60.33,190.759Zm72.052-29.3,106.066-43.783V259.267L297.844,216.059V254.44l59.3,23.328-59.3,19.421Z"
                    transform="translate(-14516.286 -1846.988)"
                    fill="#fff"
                  />
                </G>
              </Icon>
            </VStack>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
export default App;
