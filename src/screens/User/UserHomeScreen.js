import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Test1 from "./More";
import Test2 from "./Support";
import More from "./More";
import Support from "./Support";
import UserProfile from "./UserProfile";
import UserOrder from "./UserOrder";

// External Packages
import { BlurView } from "expo-blur";

// Media
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// source

const Tab = createBottomTabNavigator();
const UserHomeScreen = () => {
  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarStyle: { position: "absolute" },
    //   tabBarBackground: () => (
    //     <BlurView
    //       tint="light"
    //       intensity={100}
    //       style={StyleSheet.absoluteFill}
    //     />
    //   ),
    // }}
    >
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color="black"
            />
          ),
        }}
      />
      {/* <Tab.Screen name="UserProfile" component={UserProfile} /> */}
      <Tab.Screen
        name="UserOrder"
        component={UserOrder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="support-agent" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="read-more" size={24} color="black" />
          ),
        }}
      />
      {/* <Tab.Screen name='Test3' component={Test2}/> */}
    </Tab.Navigator>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({});
