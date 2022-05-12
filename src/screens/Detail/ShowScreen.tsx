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

import storage from '../../storage/AppStorage'
import useStore from '../../stores/store'
import { TaskRecord } from '../../types/storage/data';

const ShowScreen = ({ navigation, route }: any) => {
  const [text, setText] = useState<string>('')
  const [data, setData] = useState<null | []>(null)
  const { tasks, setTasks } = useStore()
  const { id } = route.params
  const dataIndex = id - 1
  const task = tasks.array[dataIndex]


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
    const newData = {
      key: 'tasks',
      data: {
        tasks: [

        ]
      }
    }
    await storage.save(newData)
  }

  // console.log({ data }, data?.meta!.length)
  const addTask = () => {
    tasks.array[dataIndex] = task
    setTasks([...tasks.array])
  }

  useEffect(() => {
    // setData(tasks.array[id - 1])
    // storage.load({
    //   key: 'tasks'
    // }).then((data: any) => {
    //   const dataIndex = id - 1
    //   setData(data.tasks[dataIndex])
    // }).catch((e: any) => {
    //   console.log({ error: e })
    // })
  }, [])


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
        <Button onPress={addTask}>add record</Button>

      </ScrollView>
    </View >
  );
};

export default ShowScreen;
