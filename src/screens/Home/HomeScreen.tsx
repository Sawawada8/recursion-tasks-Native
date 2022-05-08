import React, { useState } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  Button as Btn,
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
  Modal,
  Button,
} from 'native-base'

import EX from '../../components/EX';
import Card from '../../components/Tasks/MainTaskCard'
import ChildCard from '../../components/Tasks/ChildTaskCard'
import TaskCard from '../../components/TaskCard'
import { DocumentAddIcon } from '../../components/SVGIcons';

import storage from '../../storage/AppStorage'

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return <>
    <Button shadow={2} onPress={() => setShowModal(true)}>
      Button
    </Button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
              Cancel
            </Button>
            <Button onPress={() => {
              setShowModal(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </>;
};

const HomeScreen = ({ navigation }: any) => {
  const [text, setText] = useState<string>('')

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

  const navigationCreate = () => {
    navigation.navigate('CREATE')
  }

  return (
    <View>
      <ScrollView
      // style={{ backgroundColor: 'coolGray.300' }}
      >
        <Box pb={60}>
          <Text>Home Screen</Text>
          <EX />
          <Example />
          <DocumentAddIcon />
          <Btn title='getStorage' onPress={getData}></Btn>
          <Btn
            title="navi stack"
            onPress={navigationCreate}
          ></Btn>
          <TaskCard handlePress={(e: any) => console.log(e)} />
          <Text>{text}</Text>
        </Box>
      </ScrollView>
    </View >
  );
};

export default HomeScreen;

