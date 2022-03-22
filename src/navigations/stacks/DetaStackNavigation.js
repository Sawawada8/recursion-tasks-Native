import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import DetaScreen from '../../screens/DetaScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DetaStackNavigation = () => {

  return (
    <Stack.Vavigator initialRouteName="Deta">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deta" component={DetaScreen} />
    </Stack.Vavigator>
  )
}

export default DetaStackNavigation;
