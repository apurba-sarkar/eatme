import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import React from "react";
import cow from "../Images/cow.jpeg";
import { color } from "../global/style";
export default function WelcomeScreen() {
  return (
    <ScrollView >
      {/* <View style={styles.flex}> */}
        <Text style={styles.head}>Welcome to Eat Me</Text>
        <View>
          <Image style={styles.image} source={cow} />
        </View>
        <Text>Find the best food around you at most affordable price</Text>
        <View>

            <Button title="Login"></Button>
            <Button title="Signout"></Button>
        </View>
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    color: color.primary,
  },
  image: {
    height: 400,
    aspectRatio: 1,
  },
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
