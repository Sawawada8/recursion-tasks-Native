import React, { useState } from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  Button as Btn,
  View,
  TouchableOpacity,
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
  Flex,
  Center,
  Text,
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


const AddCard = () => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <Flex
        bg="gray.300"
        p={5}
        shadow='9'
        borderRadius={'md'}
        borderColor={'blueGray.700'}
        borderWidth={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        h={150}
      >
        <Text fontSize={'7xl'}>
          +
        </Text>
      </Flex>
    </TouchableOpacity>

  )
}

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

  const navigationDetail = () => {
    navigation.navigate('DETAIL')
  }

  return (
    <View>
      <ScrollView
      // style={{ backgroundColor: 'coolGray.300' }}
      >
        <Box pb={60}>
          <Flex
            direction={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexWrap={'wrap'}
            m={2}
          >
            {/* loop */}
            <Box w={'48%'}
              my={1}
            >
              <TaskCard handlePress={(e: any) => console.log(e)} />
            </Box>
            <Box w={'48%'}
              my={1}
            >
              <TaskCard handlePress={(e: any) => console.log(e)} />
            </Box>
            <Box w={'48%'}
              my={1}
            >
              <TaskCard handlePress={(e: any) => console.log(e)} />
            </Box>
            {/* end loop */}

            <Box
              w={'48%'}
              my={1}
            >
              <AddCard />
            </Box>
          </Flex>


          <Text>{text}</Text>
          <Text>Home Screen</Text>
          <EX />
          <Example />
          <DocumentAddIcon />
          <Btn title='getStorage' onPress={getData}></Btn>
          <Btn
            title="navi create"
            onPress={navigationCreate}
          ></Btn>
          <Btn
            title="navi detail"
            onPress={navigationDetail}
          ></Btn>
        </Box>
      </ScrollView >
    </View >
  );
};

export default HomeScreen;

