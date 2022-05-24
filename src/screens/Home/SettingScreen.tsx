import React, { useState } from 'react'

import {
  View,
  ScrollView,
  Text,
  Select,
} from "native-base"

import { useTask } from '../../hooks/useTask'


const ITERRATION_TERM = [
  { name: '毎日', value: '1' },
  { name: '2日毎', value: '2' },
  { name: '3日毎', value: '3' },
  { name: '4日毎', value: '4' },
  { name: '5日毎', value: '5' },
  { name: '6日毎', value: '6' },
  { name: '1週間毎', value: '7' },
]

/**
 * 通知設定、OKの定義を行う。
 * - 何日毎に行うか、
 * - 通知の設定
 * @param
 * @returns
 */
const SettingScreen = ({ navigation, route }: any) => {
  const { id } = route.params
  const { task, setTask } = useTask(id, navigation)

  const [iterationTerm, setIterationTerm] = useState('')

  const handleChangeSelectValue = (value: string) => {
    setIterationTerm(value)

  }

  return (
    <View>
      <ScrollView>
        <Text>
          setting
        </Text>
        <View>
          <Select selectedValue={'1'} onValueChange={handleChangeSelectValue}>
            {ITERRATION_TERM.map((v, i) => {
              <Select.Item label={v.name} value={v.value} key={i} />
            })}
          </Select>
        </View>
      </ScrollView>
    </View>
  )
}

export default SettingScreen
