import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { React, useState } from "react";
import PhoneTextInput from "../../inputs/PhoneTextInput";
import SendMPINButton from "../../buttons/SendMPINButton";
import { useNavigation } from "@react-navigation/native";
var { height, width } = Dimensions.get("window");

const SignInScreen = () => {
  const [phoneNumber, setTextInputPhoneNumber] = useState("");
  const navigation = useNavigation();
  const validatePhoneNumber = () => {
    if (!phoneNumber.trim()) {
      alert("Plead fill out phone number");
      return;
    }

    let length = phoneNumber.length;
    if (length < 13) {
      alert(
        "Please fill out atlest 13 digits for phone number with the country code"
      );
      return;
    } else {
      console.log(phoneNumber);
      navigation.navigate("Mpin", { phoneNum: phoneNumber });
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <PhoneTextInput setTextInputPhoneNumber={setTextInputPhoneNumber} />
      <SendMPINButton
        setValidation={validatePhoneNumber}
        navigation={navigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2596be",
    width: width,
    height: height,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default SignInScreen;
