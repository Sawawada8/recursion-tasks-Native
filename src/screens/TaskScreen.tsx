import React from 'react';
import {
  // SafeAreaView,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
} from 'react-native';


const TaskScreen = ({ navigation, route }: any) => {
  const { id, text } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>:::{text}:::{id}:::</Text>
      <Button
        title="titleeee"
        onPress={() => navigation.navigate('Deta')}
      ></Button>
    </View >
  );
};

export default TaskScreen;
