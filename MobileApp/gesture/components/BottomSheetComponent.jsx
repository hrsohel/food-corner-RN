import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function BottomSheetComponent() {
  const translateY = useSharedValue(0);
  const {height, width} = Dimensions.get('window');
  const gesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = event.translationY + ctx.y;
      translateY.value = Math.max(translateY.value, -height / 2);
      translateY.value = Math.min(translateY.value, -150);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  React.useEffect(() => {
    translateY.value = withTiming(-height / 3);
  }, []);
  return (
    <PanGestureHandler onGestureEvent={gesture}>
      <Animated.View
        style={[
          {
            backgroundColor: 'white',
            width: '100%',
            height: height,
            position: 'absolute',
            top: height,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          animatedStyle,
        ]}>
        <View
          style={{
            width: 75,
            height: 5,
            borderRadius: 10,
            backgroundColor: 'gray',
            alignSelf: 'center',
            marginVertical: 10,
          }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
}
