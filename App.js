import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Contants from "expo-constants";
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    marginTop: Contants.statusBarHeight,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // justifyContent: 'center',
  },
});
