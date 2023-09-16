import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function PerspectiveMenu() {
  const translateX = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = event.translationX + ctx.x;
      if (translateX.value >= 130) translateX.value = 130;
      if (translateX.value < 0) translateX.value = 0;
      if (translateX.value < 130) translateX.value = withTiming(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(translateX.value, [0, 10], [0, 3]);
    const borderRadius = interpolate(translateX.value, [0, 130], [0, 15]);
    return {
      borderRadius,
      transform: [
        {translateX: translateX.value},
        {perspective: 1500},
        {rotateY: `-${rotate}deg`},
      ],
    };
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <GestureHandlerRootView style={{flex: 1}}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[{flex: 1, backgroundColor: 'white'}, animatedStyle]}
          />
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
