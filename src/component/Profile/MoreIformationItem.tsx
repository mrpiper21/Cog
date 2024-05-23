import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const MoreIformationItem = () => {
  return (
    <View
      style={{ padding: wp(3), marginTop: wp(2), backgroundColor: "white" }}
    >
      <Text style={{ fontSize: wp(4), fontWeight: "600" }}>
        More information
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={{ marginRight: wp(2) }}
            name="calculator"
            size={wp(6)}
            color="black"
          />
          <Text
            style={{ marginTop: wp(3), fontSize: wp(3.5), fontWeight: "600" }}
          >
            How acceptance rate is calculated?
          </Text>
        </View>
        <Ionicons name="chevron-up" size={24} color="black" />
      </View>
      <View style={{ marginVertical: wp(3) }}>
        <Text style={{ fontSize: wp(3.4) }}>
          Your acceptance rate is the percentage of trips you accepted over the
          last 30 days. Glopilots Promos trips are excluded from your overall
          acceptance rate.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: wp(3),
          paddingVertical: wp(3),
          borderTopWidth: 1,
          borderColor: "#F5F5F5",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="black"
            style={{ marginRight: wp(2) }}
          />
          <Text style={{ fontWeight: "500", fontSize: wp(3.6) }}>
            Why acceptance rate matters?
          </Text>
        </View>
        <Feather name="chevron-down" size={24} color="black" />
      </View>
    </View>
  );
};

export default MoreIformationItem;
