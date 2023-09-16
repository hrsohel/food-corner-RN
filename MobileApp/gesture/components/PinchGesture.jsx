import React from 'react';
import {Image} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function PinchGesture() {
  const scale = useSharedValue(1);
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = 1;
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PinchGestureHandler onGestureEvent={gestureHandler}>
        <AnimatedImage
          source={{
            uri: `https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`,
          }}
          style={[{flex: 1}, animatedStyle]}
        />
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}
