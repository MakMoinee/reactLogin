import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const ConfirmMpinButton = ({ setOnPress }) => {
  return (
    <View style={styles.root}>
      <Button
        style={styles.button}
        title="Confirm MPIN"
        color="#FFFFFF"
        onPress={setOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: -180,
    backgroundColor: "#3da7cc",
    padding: 2,
    borderRadius: 15,
    marginBottom: 140,
  },
  button: {
    fontSize: 12
  },
});

export default ConfirmMpinButton;
