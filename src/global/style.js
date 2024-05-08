export const color = {
  primary: "#D20062",
  secondary: "#C4E4FF",
  primary2: "#FF407D",
  textcolor: "white",
  textcolor2: "#FF3EA5",
};

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btnprimary: {
    backgroundColor: color.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    color: color.textcolor,
    fontWeight: "bold",
    fontSize: 16,
  },
  btnsecondary: {
    backgroundColor: color.secondary,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10,
    color: color.textcolor2,
  },
  text: {
    fontSize: 16,
    color: color.textcolor,
  },
  h1: {
    fontSize: 38,
    fontWeight: "bold",
    color: color.primary,
  },
  p: {
    fontSize: 14,
    color: color.primary,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 24,
    color: color.primary,
    fontWeight: "bold",
  },
  formInput: {
    // height:20,
    paddingHorizontal: 10,
    backgroundColor: color.primary,
    paddingVertical: 5,
    width: 250,
    color: color.textcolor,
    // borderWidth:2,
    // borderRadius:5
    // borderBlockColor
    // backgroundColor:"green"
  },
  // Add more global styles here
});
