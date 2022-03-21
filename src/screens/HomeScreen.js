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

export default ({navigation}) => {
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
