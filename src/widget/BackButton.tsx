import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={hp(3)}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
