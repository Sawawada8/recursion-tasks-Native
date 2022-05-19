import React, { useState, useEffect } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {

  View,
  FormControl,
  ScrollView,
  Input,
  Box,
  Fab,
  Icon,
  Button,
  Flex,
  Circle,
} from 'native-base'

import storage, { storageKey } from '../../storage/AppStorage'
import useStore from '../../stores/store'
import { StorageData, TaskRecord } from '../../types/storage/data';
import { useTask } from '../../hooks/useTask';

import {
  PlusIcon,
} from "react-native-heroicons/solid";

const ShowScreen = ({ navigation, route }: any) => {
  const { id } = route.params
  const { task, setTask } = useTask(id, navigation)

  const [text, setText] = useState<string>('')
  const [data, setData] = useState<null | []>(null)

  const saveTaskRecord = async () => {
    // const newData = {
    //   key: 'tasks',
    //   data: {
    //     tasks: [

    //     ]
    //   }
    // }
    // await storage.save(newData)
  }

  const update = () => {
    setTask({ ...task, title: 'updated title' })
  }
  const handlePressAddResult = () => {
    // todo
  }

  if (task === undefined) {
    return <Text>no data</Text>
  }

  return (
    <View
      minHeight={'100%'}
      flex={1}
    >
      <ScrollView
      >
        <Text>detail show::id:{id}</Text>
        <Text>title:::{task.title}</Text>
        <Text>registedAt:::{task.registedAt}</Text>
        <View>
          {task.records.map((record: TaskRecord, i: number) => {
            return (
              <Text key={i}>
                data: {record.date}::state: {record.state}::comment: {record.comment}
              </Text>
            )
          })}
        </View>
        <Button onPress={update}>UPDATE</Button>

      </ScrollView>
      <Box alignItems={'center'}>
        <TouchableOpacity
          onPress={handlePressAddResult}
        >
          <Circle
            position={'absolute'}
            // right={'50%'}
            bottom={60}
            bg={'white'}
            p={3}
            shadow={5}
          >
            <PlusIcon size={40} color={'black'} />
          </Circle>
        </TouchableOpacity>
      </Box>
    </View >
  );
};

export default ShowScreen;
