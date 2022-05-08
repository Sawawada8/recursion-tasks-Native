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


const Tab = createBottomTabNavigator();

const TabNavgation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={HomeStackNavigation} />
      <Tab.Screen name="CALENDER" component={HomeStackNavigation} />
    </Tab.Navigator>
  )
}


export default TabNavgation;
