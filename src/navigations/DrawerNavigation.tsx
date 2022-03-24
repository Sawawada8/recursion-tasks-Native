import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavgation from './TabNavigation';
import HomeStackNavigation from './stacks/HomeStackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={TabNavgation} />
      <Drawer.Screen name="Article" component={TabNavgation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
