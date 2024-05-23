import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const ThumbsDownItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons name="thumb-down" size={wp(4)} color="black" />
        <Text>5</Text>
      </View>
      <View style={styles.satisfactoryBar} />
      <Text>1</Text>
    </View>
  );
};

export default ThumbsDownItem;

const styles = StyleSheet.create({
  satisfactoryBar: {
    width: wp(77),
    height: wp(2),
    backgroundColor: "#4460EF",
    borderRadius: wp(10),
    marginHorizontal: wp(2),
  },
});
