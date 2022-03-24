import React, { useState } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
} from 'react-native';
import {
  FormControl,
  Input
} from 'native-base'
import EX from '../components/EX';
import Card from '../components/Tasks/MainTaskCard'
import { DocumentAddIcon } from '../components/SVGIcons';

const HomeScreen = ({ navigation }: any) => {
  const [text, setText] = useState<string>('')
  return (
    <>
      <View style={{ backgroundColor: 'gray' }}>
        <ScrollView >
          <Text>Home Screen</Text>
          <EX />
          <DocumentAddIcon />
          <Button
            title="titleeee"
            onPress={() => navigation.navigate('Deta')}
          ></Button>
          <Text>{text}</Text>
        </ScrollView>
      </View>
      {/* <View style={{ backgroundColor: 'white', height: 300 }}> */}
      <Card navigationEvent={() => navigation.navigate('Deta')} />
      {/* </View> */}
      <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <FormControl>
          <Input h={50} variant="filled" placeholder="Chat Room ID" onChangeText={(e: any) => setText(e)} />
        </FormControl>
      </View >
    </>
  );
};

export default HomeScreen;
