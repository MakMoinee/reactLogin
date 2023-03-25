import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
var { height, width } = Dimensions.get('window');

class InputLogin extends Component {

  render() {
    return (
      <View>
        <TextInput
          style={{
            backgroundColor: "#EDEDED",
            padding: 16,
            width: (width-40),
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
          }}
          editable
          inputMode="tel"
          placeholderTextColor="#000000"
          placeholder="Enter Phone Number"
          autoCapitalize="none"
        />
      </View>
    );
  }
}

export default InputLogin;
