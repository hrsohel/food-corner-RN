import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/home";
import Random from "./Random";

export default function GetStarted({ navigation }) {
  const history = useNavigation();
  return (
    <View style={styles.mainView}>
      <StatusBar barStyle="lignt-content" backgroundColor="#462B9C" />
      <View>
        <Image
          source={require("../images/1291x1268.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text} onPress={() => history.navigate("Home")}>
        Get Started
      </Text>
    </View>
  );
}
