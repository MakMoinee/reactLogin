import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const PhoneTxt = ({ phoneNum }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{phoneNum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    padding: 30,
    marginTop: 210,
    fontSize: 25,
    color: "#FFFFFF",
  },
});

export default PhoneTxt;
