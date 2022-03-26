import React from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
} from 'react-native';


const TaskScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="titleeee"
        onPress={() => navigation.navigate('Deta')}
      ></Button>
    </View >
  );
};

export default TaskScreen;
