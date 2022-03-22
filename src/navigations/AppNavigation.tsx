import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './stacks/HomeStackNavigation';
import DetaStackNavigation from './stacks/DetaStackNavigation';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStackNavigation} />
        <Tab.Screen name="DetaStack" component={DetaStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
