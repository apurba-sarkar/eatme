import { StyleSheet, Text, View } from "react-native";
import React from "react";

// const source =
//   "https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105281/126044187-isolated-object-of-avatar-and-dummy-symbol-collection-of-avatar-and-image-stock-symbol-for-web.jpg";
const UserProfile = () => {
  return (
    <View style={styles.mainView}>
      {/* <Text>UserProfile</Text> */}
      <View style={styles.dp}>
      
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  dp:{
    backgroundColor:"red",
    height:200,
    aspectRatio:1,
    borderRadius:100,
    borderWidth:5,
    borderColor:"green"
  },
  mainView:{
    flex:1,
    alignItems:"center",
    marginTop:20
    // justifyContent:"center"
  }
});
