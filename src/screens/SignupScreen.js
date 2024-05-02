import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
// import LoginScreen from './LoginScreen';
import { color,globalStyles } from "../global/style";
export default function SignupScreen({ navigation }) {
  const initialData = {
    email: "",
    password: "",
    cpassword: "",
  };

  const [loginData, setLoginData] = useState(initialData);

  const handleChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(loginData);
  };
  return (
    <View style={styles.signupmain}>
      <Text>SignupScreen</Text>
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => handleChange("email", text)}
          value={loginData.email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => handleChange("password", text)}
          value={loginData.password}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => handleChange("cpassword", text)}
          value={loginData.cpassword}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={{color:color.textcolor}}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signupmain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
