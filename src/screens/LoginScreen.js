import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../global/style";

export default function LoginScreen() {
  const initialData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialData);

  const handleChange = (name, value) => {

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(loginData);
  };

  return (
    <View>
      <Text>Sign In</Text>
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
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.btnprimary}>
        <Text>signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
