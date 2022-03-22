import React from 'react';

import HomeScreen from '../../screens/HomeScreen';
import DetaScreen from '../../screens/DetaScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DetaStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Deta">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deta" component={DetaScreen} />
    </Stack.Navigator>
  );
};

export default DetaStackNavigation;
