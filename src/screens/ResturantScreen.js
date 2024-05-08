import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../services/apiRes";

const ResturantScreen = () => {
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["resData"],
    queryFn: getMenu,
  });

  return (
    <View>
      <Text>ResturantScreen</Text>
      <View>
        {list &&
          list.map((e) => {
            return <Text key={e.id}>{e.name}</Text>;
          })}
      </View>
    </View>
  );
};

export default ResturantScreen;

const styles = StyleSheet.create({});
