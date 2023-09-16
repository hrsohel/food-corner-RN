import React from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Pages from './Pages';

export default function Interpolate() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  const WORDS = ["What's", 'up', 'mobile', 'devs'];
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={{flex: 1}}>
      {WORDS.map((value, index) => (
        <Pages
          key={index.toString()}
          index={index}
          value={value}
          translateX={translateX}
        />
      ))}
    </Animated.ScrollView>
  );
}
