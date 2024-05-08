import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
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
import { color } from "../../global/style";

// source

const Tab = createBottomTabNavigator();
const UserHomeScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { position: "absolute" },
      tabBarBackground: () => (
        <BlurView
          tint="light"
          intensity={100}
          // style={StyleSheet.absoluteFill}
        />
      ),
      tabBarActiveBackgroundColor:color.primary,
      tabBarActiveTintColor:"white",
      tabBarInactiveBackgroundColor:color.secondary,
      tabBarInactiveTintColor:color.primary,
      headerStyle:{
        backgroundColor:color.primary,
        
        // color:"red"
      },
    headerTintColor:"white"

    }}
    >
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ color:iconColor, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={color.primary}
            />
          ),
          tabBarLabel:"Profile"
        }}
      />
      {/* <Tab.Screen name="UserProfile" component={UserProfile} /> */}
      <Tab.Screen
        name="UserOrder"
        component={UserOrder}
        options={{
          tabBarIcon: ({color:iconColor, size }) => (
            <Ionicons name="fast-food" size={24} color={color.primary} />
          ),
          tabBarLabel:"Orders"
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: ({ color:iconColor, size }) => (
            <MaterialIcons name="support-agent" size={24} color={color.primary} />
          ),
          tabBarLabel:"Support"
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color:iconColor, size }) => (
            <MaterialIcons name="read-more" size={24} color={color.primary}  />
          ),
          tabBarLabel:"More"
        }}
      />
      {/* <Tab.Screen name='Test3' component={Test2}/> */}
    </Tab.Navigator>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({});
