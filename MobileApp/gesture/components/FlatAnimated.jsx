import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

export default function FlatAnimated() {
  const data = Array(50).fill(0);
  const vItems = useSharedValue([]);
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={data}
        onViewableItemsChanged={({viewableItems}) => {
          vItems.value = viewableItems;
        }}
        renderItem={item => {
          vItems.value.filter(x => console.log(item));
          return (
            <View
              style={{
                backgroundColor: 'skyblue',
                marginVertical: 10,
                height: 50,
                borderRadius: 10,
              }}
            />
          );
        }}
      />
    </View>
  );
}
