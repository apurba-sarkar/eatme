import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuItem = ({ data }) => {
  // console.log("from mi");
  //   console.log(allData.unitPrice);
  //   const { name, unitPrice } = allData;
  console.log(data)
  return (
    <View >
      <Text>{data.name}</Text>
      {/* <Text>{unitPrice}</Text> */}
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
