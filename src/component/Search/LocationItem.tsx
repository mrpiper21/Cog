import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ItemProps {
  title: String;
  location: String;
}

const LocationItem: React.FC<ItemProps> = ({ title, location }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: wp(4),
        height: hp(12),
        borderBottomWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "white",
      }}
    >
      <MaterialCommunityIcons
        style={{ marginRight: wp(4) }}
        name="clock"
        size={wp(7)}
        color="black"
      />
      <View>
        <Text style={{ fontWeight: "500" }}>{title}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
};

export default LocationItem;
