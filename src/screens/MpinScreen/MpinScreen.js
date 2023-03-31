import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import BottomNav from "../BottomNav";
import PhoneTxt from "../../PhoneTxt";
import { useNavigation } from "@react-navigation/native";
import Mpin from "../../inputs/Mpin";
import ConfirmMpinButton from "../../buttons/ConfirmMpinButton";

var { height, width } = Dimensions.get("window");

const MpinScreen = ({ route }) => {
  const { phoneNum } = route.params;
  const navigation = useNavigation();
  const [mpin, setMpin] = useState("");
  const validateMpin = () => {
    if (mpin == "") {
      alert("MPIN Field must not be empty");
    } else {
      let length = mpin.length;
      if (length < 4) {
        alert("MPIN must not be less than 4 digits");
      }
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      keyboardDismissMode="interactive"
      showsVerticalScrollIndicator={false}
    >
      <PhoneTxt phoneNum={phoneNum} />
      <Mpin setValue={setMpin} />
      <ConfirmMpinButton setOnPress={validateMpin} />
      <BottomNav navigate={navigation} />
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
    flex: 1,
    justifyContent: "center",
  },
  mpinStyle: {
    alignItems: "center",
  },
});

export default MpinScreen;
