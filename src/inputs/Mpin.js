import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
var { height, width } = Dimensions.get("window");

const Mpin = ({ setValue }) => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter MPIN"
        placeholderTextColor="#000000"
        inputMode="numeric"
        maxLength="6"
        secureTextEntry={true}
        onChangeText={(value) => setValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    width: width - 280,
    padding: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 180,
    color: "black",
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
  },
});

export default Mpin;
