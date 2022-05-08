import React from 'react';

import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigation from '../stacks/HomeStackNavigation';
import TaskScreen from '../../screens/TaskScreen';
import HomeScreen from '../../screens/Home/HomeScreen';


const Tab = createBottomTabNavigator();

const TabNavgation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="CALENDER" component={TaskScreen} initialParams={{ id: 1, text: 'aaa' }} />
    </Tab.Navigator>
  )
}


export default TabNavgation;
