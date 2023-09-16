import React from 'react';
import {View, Text, Dimensions, StyleSheet, StatusBar} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export default function Pages({index, value, translateX}) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
    );
    return {
      transform: [{scale}],
    };
  });
  return (
    <>
      <StatusBar backgroundColor={`rgba(0, 0, 256, 0.${index})`} />
      <View
        style={[
          style.container,
          {backgroundColor: `rgba(0, 0, 256, 0.${index + 3})`},
        ]}>
        <Animated.View
          style={[
            {
              width: width * 0.7,
              height: width * 0.7,
              backgroundColor: 'blue',
            },
            animatedStyle,
          ]}
        />
        <Animated.View style={{position: 'absolute'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{value}</Text>
        </Animated.View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
