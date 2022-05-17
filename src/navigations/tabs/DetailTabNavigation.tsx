import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigation from '../stacks/HomeStackNavigation';
import ShowScreen from '../../screens/Detail/ShowScreen';
import CalenderScreen from '../../screens/Detail/CalenderScreen';

import {
  SparklesIcon,
  CalendarIcon,
  EyeIcon,
} from "react-native-heroicons/solid";

const Tab = createBottomTabNavigator();

const DetailTabNavgation = ({ route }: any) => {
  const { id } = route.params

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SHOW"
        component={ShowScreen}
        initialParams={{ id }}
        options={{
          tabBarIcon: (({ focused, color }) => {
            if (focused) {
              return <EyeIcon color={color} />
            }
            return <EyeIcon color={'gray'} />
          })
        }}
      />
      <Tab.Screen
        name="CALENDER"
        component={CalenderScreen}
        initialParams={{ id }}
        options={{
          tabBarIcon: (({ focused, color }) => {
            if (focused) {
              return <CalendarIcon color={color} />
            }
            return <CalendarIcon color={'gray'} />
          })
        }}
      />
    </Tab.Navigator>
  )
}


export default DetailTabNavgation;
