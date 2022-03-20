import React, {
  useState
} from 'react';

import {
  View,
  Text,
  Icon
} from 'react-native';

import { Entypo } from "@native-base/icons";


import {  Box,Button } from "native-base";

const Example = () => {
  const [i, setI] = useState(0);

  return (
      <View>
        <Text>
          MY COMPONENT comfsd;
        </Text>
        <Box>Hello world</Box>
        <Button onPress={() => setI(i + 1)}>on Pressssss{i}</Button>
{/* <Icon as={Entypo} name="user"></Icon> */}
      </View>
  );
};
export default Example;
