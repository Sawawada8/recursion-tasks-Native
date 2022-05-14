import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native'
import {
  // SafeAreaView,
  ScrollView,
  Button,
  Text,
  Center,
} from 'native-base';


const TaskScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView
        bg={'coolGray.200'}
      >
        <Center>
          <Text>test</Text>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
