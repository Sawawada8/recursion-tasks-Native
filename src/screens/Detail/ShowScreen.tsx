import React, { useState, useEffect } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
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
  Button,
} from 'native-base'

// import EX from '@/components/EX';
// import TaskCard from '@/components/TaskCard'
// import { DocumentAddIcon } from '@/components/SVGIcons';

import storage, { storageKey } from '../../storage/AppStorage'
import useStore from '../../stores/store'
import { StorageData, TaskRecord } from '../../types/storage/data';
import { useTask } from '../../hooks/useTask';

const ShowScreen = ({ navigation, route }: any) => {
  const { id } = route.params
  const { task, setTask } = useTask(id, navigation)

  const [text, setText] = useState<string>('')
  const [data, setData] = useState<null | []>(null)



  // const getData = () => {
  //   storage.load({ key: 'tasks' })
  //     .then((data: any) => {
  //       console.log({ data })
  //       setText(data.test)
  //     })
  //     .catch((e: any) => {
  //       console.log({ e })
  //     })
  // }

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


  if (task === undefined) {
    return <Text>no data</Text>
  }

  return (
    <View>
      <ScrollView
      // style={{ backgroundColor: 'coolGray.300' }}
      >
        <Text>detail show::id:{id}</Text>
        <Text>title:::{task.title}</Text>
        <Text>registedAt:::{task.registedAt}</Text>
        <View>

          {task.records.map((record: TaskRecord, i: number) => {
            return (
              <Text key={i}>data: {record.date}::state: {record.state}::comment: {record.comment}</Text>
            )
          })}
        </View>
        {/* <Button onPress={addTask}>add record</Button> */}

      </ScrollView>
    </View >
  );
};

export default ShowScreen;
