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
// import cow from "../Images/cow.jpeg";
import sign from "../Images/sing.png";
import { color } from "../global/style";
import { globalStyles } from "../global/style";
export default function WelcomeScreen() {
  return (
    <ScrollView>
      <View style={styles.welcomemain}>
        <Text style={styles.head}>Welcome to Eat Me</Text>
        <Image style={styles.image} source={sign} />
        <Text>Find the best food around you at most affordable price</Text>
        <View>
          <TouchableOpacity style={globalStyles.btnprimary} onPress={()=>alert("clicked")}>
            <Text>Login</Text>
            {/* <Button title="name" style={globalStyles.btnprimary}/> */}
          </TouchableOpacity>
          {/* <Touchable title="Login" style={globalStyles.btnprimary}></Touchable> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    color: color.primary,
  },
  image: {
    height: 300,
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
    marginTop: 200,
    gap: 30,
    backgroundColor: "white",
  },
});
