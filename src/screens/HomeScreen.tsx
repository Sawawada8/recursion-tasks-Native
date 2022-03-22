import React from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
} from 'react-native';
import EX from '../components/EX';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <EX />
      <Button
        title="titleeee"
        onPress={() => navigation.navigate('Deta')}
      ></Button>
    </View>
  );
};

export default HomeScreen;
