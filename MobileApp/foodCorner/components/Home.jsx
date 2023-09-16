import React from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import styles from "../styles/home";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  return (
    <ScrollView style={{ paddingBottom: 100 }}>
      <View style={{ paddingBottom: 70 }}>
        <View style={styles.topView}>
          <Text style={{ fontSize: 25 }}>Menu</Text>
          <Image
            source={require("../images/mypicture.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.searchContainer}>
          <Text
            style={{
              width: "10%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: "#D3D0D0",
              textAlign: "right",
            }}
          >
            <Icon name="search" size={35} color="#777" />
          </Text>
          <TextInput style={styles.input} placeholder="Search..." />
        </View>
        <View style={styles.imageContainer}>
          <View
            style={{
              elevation: 8,
              backgroundColor: "#462B9C",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.foodImage}
              source={require("../images/1291x1268.png")}
            />
            <Text style={{ textAlign: "center", color: "white" }}>All</Text>
          </View>
          <View
            style={{
              elevation: 8,
              backgroundColor: "#462B9C",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.foodImage}
              source={require("../images/hot-burger-king-hd-png-9dzyCE.png")}
            />
            <Text style={{ textAlign: "center", color: "white" }}>Burger</Text>
          </View>
          <View
            style={{
              elevation: 8,
              backgroundColor: "#462B9C",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.foodImage}
              source={require("../images/stock-photo-pizza-margarita-from-italian-charcoal-oven-1738993571.jpg")}
            />
            <Text style={{ textAlign: "center", color: "white" }}>Pizza</Text>
          </View>
          <View
            style={{
              elevation: 8,
              backgroundColor: "#462B9C",
              borderRadius: 10,
            }}
          >
            <Image
              style={styles.foodImage}
              source={require("../images/png-transparent-cheesecake-gelatin-dessert-smoothie-juice-milkshake-juice-cream-food-strawberries.png")}
            />
            <Text style={{ textAlign: "center", color: "white" }}>Desert</Text>
          </View>
        </View>
        <Text style={{ fontSize: 25, paddingLeft: 10, marginVertical: 10 }}>
          Promotions
        </Text>
        <View style={styles.promotionBox}>
          <View>
            <Text style={{ fontSize: 15, color: "white" }}>Today's Offer</Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              Free box of Fries
            </Text>
            <Text style={{ fontSize: 15, color: "white" }}>
              on all orders above $150
            </Text>
          </View>
          <View>
            <Image
              source={require("../images/frenchFry.webp")}
              style={{
                width: 300,
                height: 150,
                borderRadius: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
        <Text style={{ fontSize: 25, paddingLeft: 10 }}>Popular</Text>
        <View style={styles.popularContainer}>
          <View style={styles.food}>
            <Image
              source={require("../images/hot-burger-king-hd-png-9dzyCE.png")}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <Text style={{ textAlign: "center", fontSize: 15 }}>
              Beef Burger
            </Text>
            <Text style={{ color: "#C9AA05" }}>Price: 20$</Text>
          </View>
          <View style={styles.food}>
            <Image
              source={require("../images/frenchFry.webp")}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <Text style={{ textAlign: "center", fontSize: 15 }}>
              Pizza Fries
            </Text>
            <Text style={{ color: "#C9AA05" }}>Price: 20$</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
