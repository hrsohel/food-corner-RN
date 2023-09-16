import React from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Swip() {
  const task = [
    'Wake up early',
    'Practice React Native',
    'Solve problem on Data Structure and Algorithms',
    'Read documentation on NodeJS',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
    'Search your suitable jobs',
  ];
  const eachTask = task.map(() => {
    const translateX = useSharedValue(0);
    const gestureHandler = useAnimatedGestureHandler({
      onActive: event => {
        translateX.value = event.translationX;
      },
      onEnd: () => {
        translateX.value = withTiming(0, {duration: 100});
      },
    });
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateX: translateX.value}],
      };
    }, []);
    return {gestureHandler, animatedStyle};
  });
  return (
    <View style={{backgroundColor: '#333', paddingBottom: 10}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          padding: 10,
          backgroundColor: '#555',
        }}>
        Tasks to Do
      </Text>
      <ScrollView style={{padding: 10}}>
        <GestureHandlerRootView>
          {task.map((value, index) => (
            <PanGestureHandler
              key={index}
              onGestureEvent={eachTask[index].gestureHandler}>
              <Animated.View
                style={[
                  {
                    backgroundColor: 'purple',
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                  },
                  eachTask[index].animatedStyle,
                ]}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{value}</Text>
              </Animated.View>
            </PanGestureHandler>
          ))}
        </GestureHandlerRootView>
      </ScrollView>
    </View>
  );
}
