import React, { useState } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  Button,
  View,
  Text,
} from 'react-native';

import {
  FormControl,
  ScrollView,
  Input,
  Box,
  Fab,
  Icon,
} from 'native-base'

import EX from '@/components/EX';
import TaskCard from '@/components/TaskCard'
import { DocumentAddIcon } from '@/components/SVGIcons';

import storage from '../../storage/AppStorage'

const ShowScreen = ({ navigation }: any) => {
  const [text, setText] = useState<string>('')

  const getData = () => {
    storage.load({ key: 'tasks' })
      .then((data: any) => {
        console.log({ data })
        setText(data.test)
      })
      .catch((e: any) => {
        console.log({ e })
      })
  }

  return (
    <View>
      <ScrollView
      // style={{ backgroundColor: 'coolGray.300' }}
      >
        <Text>detail show</Text>
      </ScrollView>
    </View >
  );
};

export default ShowScreen;
