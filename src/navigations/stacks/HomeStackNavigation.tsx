import React from 'react';

import HomeScreen from '../../screens/HomeScreen';
import DetaScreen from '../../screens/DetaScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Dr = () => {
  return (
    <Drawer.Navigator>
      < Drawer.Screen name="Feed" component={HomeScreen} />
      <Drawer.Screen name="Article" component={DetaScreen} />
    </Drawer.Navigator>
  )
}
const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Deta" component={DetaScreen} />
      <Stack.Screen name="Home" component={Dr} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
