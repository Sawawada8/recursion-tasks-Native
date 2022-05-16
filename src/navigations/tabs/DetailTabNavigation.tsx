import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigation from '../stacks/HomeStackNavigation';
import ShowScreen from '../../screens/Detail/ShowScreen';
import CalenderScreen from '../../screens/Detail/CalenderScreen';


const Tab = createBottomTabNavigator();

const DetailTabNavgation = ({ route }: any) => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="SHOW" component={ShowScreen} initialParams={{ id: route.params.id }} />
      <Tab.Screen name="CALENDER" component={CalenderScreen} initialParams={{ id: 1, text: 'aaa' }} />
    </Tab.Navigator>
  )
}


export default DetailTabNavgation;
