import React, { useState } from 'react'

import {
  View,
  ScrollView,
  Text,
  Button,
  Center,
  Input
} from "native-base"

const CreateScreen = ({ navigation, route }: any) => {
  const [input, setInput] = useState<string>('')

  const navigationSetting = () => {
    navigation.navigate('SETTING')
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
