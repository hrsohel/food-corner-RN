import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabButton(props) {
  const ref = React.useRef();
  const { icon, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      ref={ref}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View
        style={{
          width: icon === "plus" ? 50 : 40,
          height: icon === "plus" ? 50 : 40,
          borderRadius: 30,
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
          transform: [{ translateY: focused ? -10 : 0 }],
          borderWidth: 4,
          borderColor: "transparent",
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          color={focused ? "#fff" : "#666"}
          size={icon === "plus" ? 40 : 25}
        />
      </View>
    </TouchableOpacity>
  );
}
