import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import CreateScreen from '../../screens/Home/CreateScreen';
import SettingScreen from '../../screens/Home/SettingScreen';


const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CREATE"
        component={CreateScreen}
      />
      <Stack.Screen
        name="SETTING"
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
