import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const EditBtn = () => {
  return (
    <TouchableOpacity style={styles.editButton}>
      <Entypo name="edit" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default EditBtn;

const styles = StyleSheet.create({
  editButton: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
