import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test1 from "./Chat";
import Test2 from "./Support";
import Chat from "./Chat";
import Support from "./Support";
import SellerProduct from "./SellerProduct";
import SellerProfile from "./SellerProfile";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const SellerScreen = () => {
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
        name="SellerProfile"
        component={SellerProfile}
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
      <Tab.Screen name="SellerProduct" component={SellerProduct} />
      <Tab.Screen name="Support" component={Support} />
      <Tab.Screen name="Chat" component={Chat} />
      {/* <Tab.Screen name='Test3' component={Test2}/> */}
    </Tab.Navigator>
  );
};

export default SellerScreen;

const styles = StyleSheet.create({});
