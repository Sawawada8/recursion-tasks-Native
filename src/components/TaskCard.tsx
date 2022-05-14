import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Flex,
  Text,
} from 'native-base'
import { TaskRecord } from '../types/storage/data'


interface Props {
  title: string;
  records: TaskRecord[];
  handlePress: (e: any) => void;
}
const TaskCard: React.FC<Props> = ({ title, records, handlePress }) => {

  return (
    <TouchableOpacity onPress={handlePress}>
      <Flex
        bg="blueGray.800" // bg="white"
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
        <Text
          fontSize={20}
          fontWeight={'bold'}
          mb={3}
          color={'white'}
          textAlign={'center'}
        >{title}</Text>
        <Box
          w={'80%'}
          mb={1}
          borderColor={'blue.500'}
          borderWidth={3}
          overflow={'hidden'}
        >
          <Text color={'white'}>
            count: {records.length}
          </Text>
          <Text color={'white'}>
            example
            example
            example
          </Text>
        </Box>
      </Flex>
    </TouchableOpacity>
  )
};

export default TaskCard;
