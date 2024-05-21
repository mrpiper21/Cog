import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons, Foundation } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeLoactionItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(3),
        justifyContent: "space-between",
        marginTop: wp(5),
        height: hp(8.5),
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Foundation
          style={{ marginRight: wp(5) }}
          name="home"
          size={wp(6)}
          color="black"
        />
        <View>
          <Text style={{ fontWeight: "600" }}>Home</Text>
          <Text style={{ color: "gray", marginTop: wp(1) }}>
            2443 Sierra Nevada Road, Mammoth...
          </Text>
        </View>
      </View>
      <View
        style={{
          width: wp(7.5),
          height: wp(7.5),
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "lightgray",
          borderRadius: wp(10),
        }}
      >
        <MaterialIcons name="edit" size={wp(5)} color="black" />
      </View>
    </View>
  );
};

export default HomeLoactionItem;
