import React, { useState } from 'react'

import {
  View,
  ScrollView,
  Text,
  Button,
  Center,
  Input
} from "native-base"
import storage, { storageKey } from '../../storage/AppStorage'
import { StorageData } from '../../types/storage/data'
import useStore from '../../stores/store'
import { useTasks } from '../../hooks/useTasks'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const CreateScreen = ({ navigation, route }: any) => {
  const [input, setInput] = useState<string>('')
  const { tasks, setTasks } = useTasks(navigation)

  const navigationSetting = async () => {
    // const { tasks } = await storage.load({ key: 'tasks' })
    const uuid = uuidv4()
    const date = moment().format('YYYY-MM-DD')
    const newTask: StorageData = {
      id: uuid,
      title: input,
      registedAt: date,
      records: [
        {
          date: date,
          state: 'DONE',
          comment: '頑張りました。'
        }
      ],
    }

    await storage.save({
      key: storageKey,
      id: uuid,
      data: newTask,
    })
    // setTasks([...tasks, newTask])

    // navigation.navigate('SETTING')
    navigation.navigate('HOME')
  }

  const handleChangeText = (inputText: string) => {
    setInput(inputText)
  }

  const isInput = () => {
    return input !== ''
  }

  return (
    <View>
      <ScrollView>
        <View my={5}>
          <Text
            textAlign={'center'}
            mt={100}
            fontSize={'xl'}
            fontWeight={'bold'}
          >
            継続タスクを記述！{input}
          </Text>
        </View>
        <View my={5}>
          <Input
            w={'80%'}
            mx={'auto'}
            placeholder='TASKname'
            onChangeText={handleChangeText}
          />
        </View>
        <View my={5}>
          <Button
            w={'30%'}
            mx={'auto'}
            bg={isInput() ? 'gray.800' : 'gray.200'}
            onPress={navigationSetting}
            disabled={!isInput()}
          >
            登録
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

export default CreateScreen
