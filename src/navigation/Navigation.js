import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import MpinScreen from "../screens/MpinScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator style={styles.root} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={SignInScreen} />
      <Stack.Screen
        name="Mpin"
        component={MpinScreen}
        initialParams={{ phoneNum: "" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2596be",
  },
});

export default Navigation;
