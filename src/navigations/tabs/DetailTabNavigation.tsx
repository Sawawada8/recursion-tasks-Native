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
import ShowScreen from '../../screens/Detail/ShowScreen';
import CalenderScreen from '../../screens/Detail/CalenderScreen';


const Tab = createBottomTabNavigator();

const DetailTabNavgation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SHOW" component={ShowScreen} />
      <Tab.Screen name="CALENDER" component={CalenderScreen} initialParams={{ id: 1, text: 'aaa' }} />
    </Tab.Navigator>
  )
}


export default DetailTabNavgation;
