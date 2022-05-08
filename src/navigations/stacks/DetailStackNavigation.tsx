import React from 'react';

import ShowScreen from '../../screens/Detail/ShowScreen';
import CalenderScreen from '../../screens/Detail/CalenderScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DetailStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SHOW">
      <Stack.Screen name="SHOW" component={ShowScreen} />
      <Stack.Screen name="CALENDER" component={CalenderScreen} />
    </Stack.Navigator>
  );
};

export default DetailStackNavigation;
