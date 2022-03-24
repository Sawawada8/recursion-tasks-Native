import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './stacks/HomeStackNavigation';
import DetaStackNavigation from './stacks/DetaStackNavigation';


const Tab = createBottomTabNavigator();

const TabNavgation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigation} />
      <Tab.Screen name="DetaStack" component={DetaStackNavigation} />
    </Tab.Navigator>
  )
}


export default TabNavgation;
