import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Flex,
  Text,
} from 'native-base'


const TaskCard = ({ handlePress }: any) => {

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
        >hello world</Text>
        <Box
          w={'80%'}
          mb={1}
          borderColor={'blue.500'}
          borderWidth={3}
          overflow={'hidden'}
        >
          <Text color={'white'}>
            example
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
