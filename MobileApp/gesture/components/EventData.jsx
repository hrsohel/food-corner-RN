import React from 'react';
import {View, Text} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler} from 'react-native-reanimated';

export default function EventData() {
  const gesture = useAnimatedGestureHandler({
    onStart: event => {
      console.log(_WORKLET);
    },
    onActive: event => {
      console.log(event.x, event.absoluteX);
    },
  });
  return (
    <GestureHandlerRootView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: 200, height: 100, backgroundColor: 'blue'}}>
        <PanGestureHandler onGestureEvent={gesture}>
          <Animated.View
            style={{width: 50, height: 30, backgroundColor: 'red'}}
          />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}
