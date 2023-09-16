import React from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

export default function PanGesture() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.translateX = translateX.value;
      ctx.translateY = translateY.value;
    },
    onActive: (event, ctx) => {
      console.log(event.x);
      translateX.value = event.translationX + ctx.translateX;
      translateY.value = event.translationY + ctx.translateY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <GestureHandlerRootView>
        <View
          style={{
            width: 350,
            height: 350,
            borderRadius: 200,
            borderWidth: 5,
            borderColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PanGestureHandler onGestureEvent={panHandler}>
            <Animated.View
              style={[
                {
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: 'rgba(0, 0, 256, .5)',
                },
                animationStyle,
              ]}
            />
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}
