import { View, TextInput, Button, Dimensions, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-web";
var { height, width } = Dimensions.get("window");

export default function App() {
  const [textInputPhoneNumber, setTextInputPhoneNumber] = useState("");
  const validatePhoneNumber = () => {
    if (!textInputPhoneNumber.trim()) {
      alert("Plead fill out phone number");
      return;
    }

    let length = textInputPhoneNumber.length;
    if (length < 13) {
      alert(
        "Please fill out atlest 13 digits for phone number with the country code"
      );
      return;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2596be",
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          marginTop: 40,
          marginLeft: 270,
        }}
      >
        Register
      </Text>
      <TextInput
        style={{
          backgroundColor: "#EDEDED",
          marginTop: 250,
          padding: 16,
          width: width - 40,
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
        editable
        inputMode="tel"
        placeholderTextColor="#000000"
        placeholder="Enter Phone Number"
        autoCapitalize="none"
        onChangeText={(value) => setTextInputPhoneNumber(value)}
      />

      <Button
        style={{
          backgroundColor: "#3da7cc",
          marginTop: 20,
          padding: 10,
        }}
        color="#000000"
        title="Send MPIN"
        onPress={validatePhoneNumber}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            marginLeft: -180,
            padding: 20,
            color: "#FFFFFF",
          }}
        >
          Sample
        </Text>
      </View>
    </View>
  );
}
