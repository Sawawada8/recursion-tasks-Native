import React, { useState } from 'react';
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

import EX from '../components/EX';
import Card from '../components/Tasks/MainTaskCard'
import ChildCard from '../components/Tasks/ChildTaskCard'
import { DocumentAddIcon } from '../components/SVGIcons';

const HomeScreen = ({ navigation }: any) => {
  const [text, setText] = useState<string>('')
  return (
    <>
      <View>
        <ScrollView
        // style={{ backgroundColor: 'coolGray.300' }}
        >
          <Box bg={'blueGray.900'} pb={60}>
            <Text>Home Screen</Text>
            <EX />
            <DocumentAddIcon />
            <Button
              title="titleeee"
              onPress={() => navigation.navigate('Deta')}
            ></Button>
            <Text>{text}</Text>
            <Card navigationEvent={() => navigation.navigate('Deta')} />
            <Text style={{ color: 'red' }}>fjk;afjsdkafsdjkl;</Text>
            <Card navigationEvent={() => navigation.navigate('Deta')} />
            <ChildCard hasChild={false}></ChildCard>
            <ChildCard hasChild={false}></ChildCard>
            <ChildCard hasChild={false}></ChildCard>
            <ChildCard hasChild={false}></ChildCard>
            <ChildCard hasChild={true} handlePress={(e) => console.log(e)}></ChildCard>
            <ChildCard hasChild={true} handlePress={(e) => console.log(e)}></ChildCard>
            <ChildCard hasChild={true} handlePress={(e) => console.log(e)}></ChildCard>
            <ChildCard hasChild={true} handlePress={(e) => console.log(e)}></ChildCard>

          </Box>
        </ScrollView>
      </View>
      {/* <View style={{ backgroundColor: 'white', height: 300 }}> */}
      {/* </View> */}
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: 'black'
      }}>
        <FormControl>
          <Input h={50} m={1} bg={'teal.100'} size='2xl' variant="outline" placeholder="Chat Room ID" onChangeText={(e: any) => setText(e)} />
        </FormControl>
        <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" name="plus" size="sm" />} mb={12} />
      </View>
    </>
  );
};

export default HomeScreen;
