import React, { useState } from 'react'

import {
  View,
  ScrollView,
  Text,
  Button,
  Center,
  Input
} from "native-base"
import storage from '../../storage/AppStorage'
import { StorageData } from '../../types/storage/data'
import useStore from '../../stores/store'

const CreateScreen = ({ navigation, route }: any) => {
  const [input, setInput] = useState<string>('')
  const { setTasks } = useStore()

  const navigationSetting = async () => {
    const { tasks } = await storage.load({ key: 'tasks' })
    const newTask: StorageData = {
      id: tasks.length + 1,
      title: input,
      registedAt: new Date(),
      records: [],
    }

    await storage.save({
      key: 'tasks',
      data: {
        tasks: [...tasks, newTask]
      }
    })
    setTasks([...tasks, newTask])

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
