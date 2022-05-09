import React, { useState, useEffect } from 'react';
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
import TaskCard from '../../components/TaskCard'
import { DocumentAddIcon } from '../../components/SVGIcons';

import storage from '../../storage/AppStorage'
import { StorageData, TaskState } from '../../types/storage/data'
import useStore from '../../stores/store';

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return <>
    <Button shadow={2} onPress={() => setShowModal(true)}>
      Button
    </Button>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="500px">
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


interface AddCardProps {
  handlePress: () => void;
}
const AddCard: React.FC<AddCardProps> = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Flex
        bg="gray.300"
        p={5}
        shadow='9'
        borderRadius={'xl'}
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

interface Props {
  navigation: any;
  route: any;
}
const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { tasks, setTasks } = useStore()
  // console.log(route.params)

  const navigationCreate = () => {
    navigation.navigate('CREATE')
    // setData([
    //   ...data,
    //   {
    //     id: data.length + 1,
    //     title: 'name',
    //     registedAt: new Date(),
    //     records: [
    //       {
    //         date: new Date(),
    //         state: 'DONE',
    //       }]
    //   }
    // ])
  }

  const navigationDetail = () => {
    navigation.navigate('DETAIL')
  }
  // console.log({ tasks })

  useEffect(() => {
    storage.load({ key: 'tasks' })
      .then((data: any) => {
        console.log({ data })
        setTasks(data.tasks.data)
      })
      .catch((e: any) => {
        console.log({ e })
      })
  }, [])

  return (
    <View>
      <ScrollView
        bg={'coolGray.200'}
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
            {tasks.data.map((v: StorageData, i) => {
              return (
                <Box
                  key={i}
                  w={'48%'}
                  my={1}
                >
                  <TaskCard
                    title={v.title}
                    records={v.records}
                    handlePress={(e: any) => {
                      navigation.navigate('DETAIL', { id: v.id })
                    }}
                  />
                </Box>
              )
            })}
            {/* end loop */}

            <Box
              w={'48%'}
              my={1}
            >
              <AddCard handlePress={navigationCreate} />
            </Box>
            <Box
              w={'48%'}
              my={1}
            ></Box>
          </Flex>

          <Text>Home Screen</Text>
          <EX />
          <Example />
          <DocumentAddIcon />
          <Btn
            title="navi create"
            onPress={navigationCreate}
          ></Btn>
          <Btn
            title="navi detail"
            onPress={navigationDetail}
          ></Btn>
        </Box>
      </ScrollView>
    </View >
  );
};

export default HomeScreen;
