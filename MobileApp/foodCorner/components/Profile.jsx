import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function Profile() {
  const ref = useRef();
  const changeSize = () => {
    ref.current.setNativeProps({
      style: { transform: [{ scale: 0.98 }, { translateX: 250 }] },
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <View
        ref={ref}
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={changeSize}>
            <MaterialCommunityIcons name="menu" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: "white", fontWeight: "bold" }}>Hello HR</Text>
      </View>
    </View>
  );
}
