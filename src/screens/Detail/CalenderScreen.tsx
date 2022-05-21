import React, { useState } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  Button,
  View,
} from 'react-native';

import {
  FormControl,
  ScrollView,
  Input,
  Box,
  Fab,
  Icon,
  Center,
  Text,
  Flex,
} from 'native-base'

import { Calendar } from 'react-native-calendars'

import storage from '../../storage/AppStorage'

import { useTask } from '../../hooks/useTask'

const CalenderScreen = ({ navigation, route }: any) => {
  const { id } = route.params
  const { task, setTask } = useTask(id, navigation)

  if (task === undefined) {
    return <Center
      h={'100%'}
      alignItems={'center'}
    >
      <Text
        fontSize={30}
        fontWeight={'bold'}
      >Loading ...</Text>
    </Center>
  }

  const createMarkedDates = () => {
    const markedDates: any = {};
    for (const record of task?.records) {
      markedDates[record.date] = { selected: true }
    }

    return markedDates;
  }

  return (
    <View>
      <ScrollView
      // style={{ backgroundColor: 'coolGray.300' }}
      >
        <Text>{task.title}</Text>
        <Text>{task.registedAt}</Text>
        <Text>{id}</Text>

        <Calendar
          enableSwipeMonths={true}
          markedDates={createMarkedDates()}
        />
        <Text>------------</Text>

      </ScrollView>
    </View >
  );
};

export default CalenderScreen;
