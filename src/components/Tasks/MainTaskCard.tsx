import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Box, Text, Icon } from 'native-base';

interface Props {
  title?: string;
  progress?: string;
  dueDate?: string;
  // deadlineDate: string;
  navigationEvent: () => void;
}

const MainTaskCard: React.FC<Props> = ({ title, progress, dueDate, navigationEvent }) => {
  return (
    <>
      <TouchableOpacity onPress={(e) => navigationEvent()}>
        <Box bg="white" borderRadius={'md'} m={2} p={3} shadow='9'>
          <Text fontSize={'xl'} fontWeight={'bold'}>TaskTitle</Text>
          fjkdsl;jfkal;s
          <Text>{dueDate}</Text>
        </Box>
      </TouchableOpacity >
    </>
  )
}

export default MainTaskCard
