import React from 'react';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Dimensions, View} from 'react-native';

export default function Interpolation2() {
  const scrollX = useSharedValue(1);
  const animatesStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [100, 150, 200, 250],
      [1.1, 1.3, 1.5, 1.7],
    );
    return {
      transform: [{scale}],
    };
  });
  const {width, height} = Dimensions.get('window');
  const scrollevent = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <Animated.ScrollView onScroll={scrollevent} horizontal style={{flex: 1}}>
      {Array(4)
        .fill(1)
        .map((value, index) => {
          return (
            <View
              key={index}
              style={{
                width,
                height,
                backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animated.View
                style={[
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: 'blue',
                  },
                  animatesStyle,
                ]}
              />
            </View>
          );
        })}
    </Animated.ScrollView>
  );
}
