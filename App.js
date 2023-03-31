import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2596be",
    alignItems: "center",
    justifyContent: "center",
  },
});
