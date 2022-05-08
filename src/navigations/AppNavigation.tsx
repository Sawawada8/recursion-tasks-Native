import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HOME' component={Screen} />
        <Stack.Screen name='stack' component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default AppNavigation;
