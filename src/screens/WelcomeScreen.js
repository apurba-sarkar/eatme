import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import sing from "../Images/sing.png";
import { color } from "../global/style";
import { globalStyles } from "../global/style";
import SignupScreen from "./SignupScreen";
import LoginScreen from './LoginScreen';
export default function WelcomeScreen({ navigation }) {
  return (
    // <ScrollView>
    <View style={styles.welcomemain}>
      <Text style={globalStyles.h1}>Welcome to Eat-Me</Text>
      <Image style={styles.image} source={sing} />
      <Text style={globalStyles.p}>Find the best food around you at most affordable price</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={globalStyles.btnprimary}>Login</Text>
          {/* <Button title="name" style={globalStyles.btnprimary}/> */}
        </TouchableOpacity>
        {/* <Touchable title="Login" style={globalStyles.btnprimary}></Touchable> */}
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    color: color.primary,
  },
  image: {
    height: 350,
    aspectRatio: 1,
  },
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  welcomemain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 200,
    gap: 30,
    backgroundColor: "white",
  },
});
