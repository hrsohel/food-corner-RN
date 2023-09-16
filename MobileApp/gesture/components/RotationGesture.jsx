import React from 'react';
import {View, Text} from 'react-native';
import {
  Gesture,
  GestureHandlerRootView,
  PanGestureHandler,
  RotationGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler} from 'react-native-reanimated';

export default function RotationGesture() {
  const gesture = Gesture.Rotation().onBegin(event => {
    console.log(event);
  });
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <RotationGestureHandler onGestureEvent={gesture}>
        <Animated.View
          style={{
            width: 200,
            height: 150,
            backgroundColor: 'red',
          }}
        />
      </RotationGestureHandler>
    </GestureHandlerRootView>
  );
}
