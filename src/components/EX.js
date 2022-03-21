import React from 'react';

import {StyleSheet, Button, } from 'react-native';
import {Icon} from 'native-base'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Svg, Path} from 'react-native-svg'

export default () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Icon name="home" />
      <Icon>
      <Svg height="100" width="100">
      <Path
        d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
        fill="none"
        stroke="red"
      />
    </Svg>
    </Icon>
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
        title="Move"
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
  },
});
