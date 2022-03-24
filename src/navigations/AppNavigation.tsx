import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';



const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer >
  );
};

export default AppNavigation;
