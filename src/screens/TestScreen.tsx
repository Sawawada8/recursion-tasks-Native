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

import {
  SparklesIcon,
  CalendarIcon,
} from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";


const TaskScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView
        bg={'coolGray.200'}
      >
        <Center>
          <Text>test</Text>
          <Text>-------------------</Text>
          <Text>spark icon</Text>
          <SparklesIcon />
          <Text>spark icon outline</Text>
          <SparklesIconOutline />
          <Text>calendar</Text>
          <CalendarIcon />
          <CalendarIcon color="red" size={40} />
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
