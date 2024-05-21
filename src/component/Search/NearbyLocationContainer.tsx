import { View, Text } from "react-native";
import React from "react";
import RecommedationItem from "./RecommedationItem";
import {
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NearbyLocationContainer = () => {
  return (
    <View
      style={{ padding: wp(5), marginTop: wp(2), backgroundColor: "white" }}
    >
      <Text style={{ fontWeight: "600", fontSize: wp(4), marginBottom: wp(2) }}>
        Nearby places
      </Text>
      <View style={{ flexDirection: "row", gap: wp(5), flexWrap: "wrap" }}>
        <RecommedationItem
          label={"Restrooms"}
          icon={<Foundation name="male-female" size={24} color="black" />}
        />
        <RecommedationItem
          label={"Food"}
          icon={
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color="black"
            />
          }
        />
        <RecommedationItem
          label={"Gas"}
          icon={
            <MaterialIcons name="local-gas-station" size={24} color="black" />
          }
        />
        <RecommedationItem
          label={"Reward"}
          icon={<Ionicons name="pricetag" size={24} color="black" />}
        />
      </View>
    </View>
  );
};

export default NearbyLocationContainer;
