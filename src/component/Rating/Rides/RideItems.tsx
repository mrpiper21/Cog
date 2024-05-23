import { View, Text } from "react-native";
import React from "react";
import RatingBarContainer from "./RatingBarContainer";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RideItems = () => {
  return (
    <View>
      <View style={{ alignItems: "center", marginVertical: wp(3) }}>
        <View style={{ marginVertical: wp(3) }}>
          <AntDesign name="star" size={wp(10)} color="orange" />
          <Text style={{ fontSize: wp(4), fontWeight: "600" }}>4.75</Text>
        </View>
        <View style={{ alignItems: "center", gap: wp(5) }}>
          <RatingBarContainer />
          <RatingBarContainer />
          <RatingBarContainer />
          <RatingBarContainer />
          <RatingBarContainer />
          <Text>Last 300 ratings</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
            padding: wp(4),
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: wp(5), fontWeight: "600" }}>
              No recent rider feedback
            </Text>
            <View style={{ width: wp(60), marginTop: wp(2) }}>
              <Text style={{ fontSize: wp(3.5) }}>
                This is where you’ll see feedback from riders who rate you under
                5 stars.
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="message-minus"
                size={wp(10)}
                color="#4460EF"
              />
              <AntDesign name="star" size={wp(5)} color="orange" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="message-minus"
                size={wp(10)}
                color="#4460EF"
              />
              <AntDesign name="star" size={wp(5)} color="orange" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="message-minus"
                size={wp(10)}
                color="#4460EF"
              />
              <AntDesign name="star" size={wp(5)} color="orange" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideItems;
