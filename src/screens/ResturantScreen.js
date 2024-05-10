import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../services/apiRes";
import MenuItem from "../helpers/MenuItem";
import dummyData from "../services/dummyData";

const ResturantScreen = () => {
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["resData"],
    queryFn: getMenu,
  });
  // console.log("al list");
  //   console.log(list);

  //   const allData=list.data

  // console.log(allData)
// console.log(dummyData.id)
  return (
    <View>
      <Text>ResturantScreen</Text>
      <View>
        {dummyData &&
          Array.isArray(dummyData) &&
          dummyData.map((data) => {
            return <MenuItem key={data.id} data={data} />;
          })}
      </View>
    </View>
  );
};

export default ResturantScreen;

const styles = StyleSheet.create({});
