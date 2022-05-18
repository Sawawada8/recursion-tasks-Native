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

        <Calendar
          // Initially visible month. Default = now
          current={'2012-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => <View>+</View>}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={true}
          // Disable right arrow. Default = false
          disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={date => {
            /*Return JSX*/
            return <></>
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </ScrollView>
    </View >
  );
};

export default CalenderScreen;
