import React, { useState, useEffect } from 'react';
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

const ShowScreen = ({ navigation, route }: any) => {
  const [text, setText] = useState<string>('')
  const [data, setData] = useState<null | []>(null)
  const { id } = route.params
  console.log({ dataildId: id })

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

  // console.log({ data }, data?.meta!.length)

  useEffect(() => {
    storage.load({
      key: 'tasks'
    }).then((data: any) => {
      const dataIndex = data.tasks.findIndex((ele: any) => {
        return ele.id == id;
      })

      setData(data.tasks[dataIndex])
    }).catch((e: any) => {
      console.log({ error: e })
    })
  }, [])

  console.log({ data })

  return (
    <View>
      <ScrollView
      // style={{ backgroundColor: 'coolGray.300' }}
      >
        <Text>detail show::id:{id}</Text>
        {/* {data?.meta?.map((v, i) => {
          return (
            <Text key={i}>{v.date}</Text>
          )
        })} */}
      </ScrollView>
    </View >
  );
};

export default ShowScreen;
