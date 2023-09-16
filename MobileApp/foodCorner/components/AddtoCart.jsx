import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddtoCart() {
  const [count, setCount] = React.useState(1);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    if (count <= 1) setCount(1);
    else setCount((prev) => prev - 1);
  };
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#472C9D",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#472C9D",
            marginTop: 100,
          }}
        >
          <Image
            source={require("../images/hot-burger-king-hd-png-9dzyCE.png")}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 70,
            height: "100%",
            padding: 30,
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor: "#462B9C",
                width: 100,
                borderRadius: 25,
                padding: 7,
              }}
            >
              <Icon name="star" color="#C9AA05" size={20} />
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                4.8
              </Text>
            </View>
            <Text style={{ fontSize: 18, color: "#C9AA05" }}>
              {count * 20}$
            </Text>
          </View>
          <View style={innerStyles.flexBetween}>
            <Text style={{ fontSize: 18 }}>Beef Burger</Text>
            <View style={innerStyles.flexCenter}>
              <Icon onPress={increase} name="plus" size={15} color="#462B9C" />
              <Text style={{ marginHorizontal: 10 }}>{count}</Text>
              <Icon onPress={decrease} name="minus" size={15} color="#462B9C" />
            </View>
          </View>
          <Text style={{ fontSize: 18 }}>
            Big juicy beef burger with cheese, lettuce, tomato, onions and
            special sauce !
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            accessibilityLabel="Press me to perform an action"
            style={{
              width: "80%",
              padding: 15,
              marginTop: 40,
              backgroundColor: "#462B9C",
              borderRadius: 30,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const innerStyles = StyleSheet.create({
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  flexBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
});
