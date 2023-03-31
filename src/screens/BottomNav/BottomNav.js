import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BottomNav = ({navigate}) => {
  return (
    <View style={styles.root}>
      <Text 
      style={styles.text}
      onPress={() => navigate.navigate('Home')}>Switch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    marginLeft: -190,
    marginBottom: 10,
    padding: 30,
    color: "#FFFFFF",
  },
});

export default BottomNav;
