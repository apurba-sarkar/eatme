import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextComponent, View } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RootNavigation from "./src/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/screens/SignupScreen";
import UserHomeScreen from "./src/screens/UserProfile/UserHomeScreen";
import ResturantScreen from "./src/screens/ResturantScreen";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
            <Stack.Screen name="ResturantScreen" component={ResturantScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <WelcomeScreen /> */}
        {/* <LoginScreen/> */}
        {/* <RootNavigation /> */}
        {/* <View>
        <Text>sda</Text>
      </View> */}
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
