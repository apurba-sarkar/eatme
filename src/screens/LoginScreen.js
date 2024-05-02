import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { color, globalStyles } from "../global/style";
import login from "../Images/login.png";
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
    <View style={[globalStyles.container, { gap: 10 }]}>
      <Image source={login} style={{ height: 250, aspectRatio: 1 }} />
      <Text style={globalStyles.h2}>Login In</Text>

      <View style={globalStyles.formInput}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => handleChange("email", text)}
          value={loginData.email}
          style={{ color: color.textcolor }}
        />
      </View>
      <View style={globalStyles.formInput}>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => handleChange("password", text)}
          value={loginData.password}
          // style={{ color: color.textcolor2 }}
        />
      </View>
      <View></View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={globalStyles.btnprimary}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>signup</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({});
