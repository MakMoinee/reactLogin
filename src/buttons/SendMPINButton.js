import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const SendMPINButton = ({setValidation,navigation}) => {
  return (
    <View>
      <Button 
      style={styles.button} 
      title="Send MPIN"
      color="#FFFFFF"
      onPress={setValidation} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: "white",
    backgroundColor: "#3da7cc",
    marginTop: 20,
    padding: 10,
  },
});

export default SendMPINButton;
