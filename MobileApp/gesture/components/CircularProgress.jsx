import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import SVG, {Circle} from 'react-native-svg';

export default function CircularProgress() {
  const progress = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: 1000 * (1 - progress.value),
  }));
  const textValue = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });
  const AnimtedCircle = Animated.createAnimatedComponent(Circle);
  const {width, height} = Dimensions.get('window');
  const circumference = 1000;
  const R = circumference / (2 * Math.PI);
  const backgroundColor = '#444B6F';
  const backgoundStrokeColor = '#303858';
  const strokeColor = '#A6E1FA';
  React.useEffect(() => {
    progress.value = withTiming(1, {duration: 2000});
  }, []);
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 25}}>{textValue.value}</Text>
      <SVG>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={backgoundStrokeColor}
          strokeWidth={20}
        />
        <AnimtedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={strokeColor}
          strokeWidth={20}
          strokeDasharray={1000}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </SVG>
    </View>
  );
}
