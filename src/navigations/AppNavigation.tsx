import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DetailTabNavigation from './tabs/DetailTabNavigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStackNavigator from './stacks/HomeStackNavigation'

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HOMESTACK' component={HomeStackNavigator} />
        <Stack.Screen name='DETAIL' component={DetailTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default AppNavigation;
