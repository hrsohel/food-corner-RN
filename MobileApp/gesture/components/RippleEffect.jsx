import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function RippleEffect() {
  const scale = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const tapGesture = useAnimatedGestureHandler({
    onStart: event => {
      scale.value = withTiming(1, {duration: 1000});
    },
    onActive: event => {
      translateX.value = -event.x;
      translateY.value = -event.y;
      //   scale.value = 0;
    },
    onFinish: () => {
      scale.value = withTiming(0, {duration: 1000});
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: translateX.value,
      top: translateY.value,
      transform: [{scale: scale.value}],
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="#333" />
      <GestureHandlerRootView>
        <TapGestureHandler onGestureEvent={tapGesture}>
          <Animated.View
            style={{
              width: 200,
              height: 200,
              borderRadius: 5,
              backgroundColor: 'white',
              elevation: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
              Tap
            </Text>
            <Animated.View
              style={[
                {
                  width: 2 * Math.sqrt(Math.pow(200, 2) + Math.pow(200, 2)),
                  height: 2 * Math.sqrt(Math.pow(200, 2) + Math.pow(200, 2)),
                  //   borderRadius:
                  //     (2 * Math.sqrt(Math.pow(200, 2) + Math.pow(200, 2))) / 2,
                  backgroundColor: 'red',
                  position: 'absolute',
                  opacity: 0.5,
                },
                animatedStyle,
              ]}
            />
          </Animated.View>
        </TapGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}
