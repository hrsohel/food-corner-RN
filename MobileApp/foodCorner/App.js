import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted";
import Random from "./components/Random";
import AddtoCart from "./components/AddtoCart";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabButton from "./components/TabButton";
import Profile from "./components/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Get Started"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#472C9D",
            tabBarStyle: {
              height: 60,
              position: "absolute",
              bottom: 10,
              left: 10,
              right: 10,
              borderRadius: 20,
              backgroundColor: "#fff",
              elevation: 0,
              paddingVertical: 10,
              paddingBottom: 10,
              borderTopColor: "#fff",
              elevation: 10,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  style={
                    focused
                      ? { fontWeight: "bold", color: "#472C9D" }
                      : { fontWeight: "bold", color: "#333" }
                  }
                >
                  Home
                </Text>
              ),
              tabBarButton: (props) => <TabButton {...props} icon="home" />,
            }}
          />
          {/* <Tab.Screen
            name="Get Started"
            component={GetStarted}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  style={
                    focused
                      ? { fontWeight: "bold", color: "#472C9D" }
                      : { fontWeight: "bold", color: "#333" }
                  }
                >
                  Get Started
                </Text>
              ),
              tabBarButton: (props) => <TabButton {...props} icon="cart" />,
              tabBarStyle: { display: "none" },
              tabBarVisible: false,
            }}
          /> */}
          <Tab.Screen
            name="plus"
            component={GetStarted}
            options={{
              tabBarButton: (props) => <TabButton {...props} icon="plus" />,
            }}
          />
          <Tab.Screen
            name="Add to Cart"
            component={AddtoCart}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  style={
                    focused
                      ? { fontWeight: "bold", color: "#472C9D" }
                      : { fontWeight: "bold", color: "#333" }
                  }
                >
                  Add to Cart
                </Text>
              ),
              tabBarButton: (props) => <TabButton {...props} icon="magnify" />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarButton: (props) => <TabButton {...props} icon="account" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
