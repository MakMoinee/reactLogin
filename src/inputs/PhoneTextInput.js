import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
var { height, width } = Dimensions.get("window");

const PhoneTextInput = ({ setTextInputPhoneNumber }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        autoCapitalize="none"
        onChangeText={(value) => setTextInputPhoneNumber(value)}
        inputMode="tel"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EDEDED",
    marginTop: 250,
    padding: 16,
    width: width - 40,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default PhoneTextInput;
