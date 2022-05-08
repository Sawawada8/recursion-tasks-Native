import React from 'react'

import {
  View,
  ScrollView,
  Text,
  Button,
} from "native-base"

const CreateScreen = ({ navigation }: any) => {

  const navigationSetting = () => {
    navigation.navigate('SETTING')
  }

  return (
    <View>
      <ScrollView>
        <Text>fjasdk;fjsdka;</Text>
        <Button onPress={navigationSetting}>aaa</Button>
      </ScrollView>
    </View >
  )
}

export default CreateScreen
