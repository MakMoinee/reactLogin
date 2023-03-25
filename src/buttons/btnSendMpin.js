import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class ButtonSendMpin extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          backgroundColor: "#3da7cc",
          marginTop: 20,
          padding: 10,
        }}
      >
        <Button
          color="#FFFFFF"
          title="Send MPIN"
        />
      </View>
    );
  }
}

export default ButtonSendMpin;
