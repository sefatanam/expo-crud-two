import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Contants from "expo-constants";
import Home from "./screens/Home";
import CreateEmployee from "./screens/CreateEmployee";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const myOption = {
  title: "My Employees",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#6420ee",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{...myOption,title:'My Employees'}} />
        <Stack.Screen name="Create" component={CreateEmployee}  options={{...myOption,title:'Create Employee'}} />
        <Stack.Screen name="Profile" component={Profile}  options={{...myOption,title:'Employee Details'}}/>
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    // marginTop: Contants.statusBarHeight,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // justifyContent: 'center',
  },
});
