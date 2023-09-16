import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheetComponent from './BottomSheetComponent';

export default function BottomSheet() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar backgroundColor="#333" />
        <BottomSheetComponent />
      </View>
    </GestureHandlerRootView>
  );
}
