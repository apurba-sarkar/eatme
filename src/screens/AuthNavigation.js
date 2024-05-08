import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./WelcomeScreen";
import SignupScreen from "./SignupScreen";
import LoginScreen from "./LoginScreen";
import UserHomeScreen from "./UserProfile/UserHomeScreen";
import ResturantScreen from "./ResturantScreen";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      {/* <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} /> */}
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ResturantScreen" component={ResturantScreen} />
    
    </Stack.Navigator>
  );
}
