import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Text,
} from 'native-base'


const TouchableContainer = ({ children, handlePress }: any) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      {children}
    </TouchableOpacity>
  )
}

const TouchdisableContainer = ({ children }: any) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

interface Props {
  hasChild: boolean;
  handlePress?: (e: any) => void;
}

const ChildtTaskCard: React.FC<Props> = ({ hasChild, handlePress }) => {

  const contents = (
    <Box
      bg="blueGray.800" // bg="white"
      m={2} p={3}
      shadow='9'
      borderRadius={'md'}
      borderColor={'blueGray.700'}
      borderWidth={1}
    >
      <Text color={'white'}>hello world</Text>
    </Box>
  )
  if (hasChild) {
    return (
      <TouchableContainer handlePress={handlePress}>
        {contents}
      </TouchableContainer>
    );
  }

  return (
    <TouchdisableContainer>
      {contents}
    </TouchdisableContainer>
  )
};

export default ChildtTaskCard;
