import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { color, globalStyles } from "../global/style";
import login from "../Images/login.png";
import UserHomeScreen from './User/UserHomeScreen';
export default function LoginScreen({navigation}) {
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

        <KeyboardAvoidingView style={globalStyles.formInput}>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => handleChange("email", text)}
            value={loginData.email}
            style={{ color: color.textcolor }}
          />
        </KeyboardAvoidingView>
        <View style={globalStyles.formInput}>
          <TextInput
            placeholder="Password"
            onChangeText={(text) => handleChange("password", text)}
            value={loginData.password}
            // style={{ color: color.textcolor2 }}
          />
        </View>
       
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={globalStyles.btnprimary}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>signup</Text>
        </TouchableOpacity>
        <Button title="user" onPress={()=>navigation.navigate("UserHomeScreen")}/>
      </View>

  );
}

const styles = StyleSheet.create({});
