import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RatingBarContainer = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="star" size={wp(4)} color="orange" />
        <Text>5</Text>
      </View>
      <View style={styles.ratingBar} />
      <Text>1</Text>
    </View>
  );
};

export default RatingBarContainer;

const styles = StyleSheet.create({
  ratingBar: {
    width: wp(77),
    height: wp(2),
    backgroundColor: "#4460EF",
    borderRadius: wp(10),
    marginHorizontal: wp(2),
  },
});
