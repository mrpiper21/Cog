import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HightlightsCard = () => {
  return (
    <View style={{ backgroundColor: "white", padding: wp(4) }}>
      <Text style={{ fontSize: wp(4.5), fontWeight: "600" }}>Highlights</Text>
      <View style={{ flexDirection: "row", marginTop: wp(3) }}>
        <View style={{ marginRight: wp(35) }}>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>150</Text>
          <Text>Rides</Text>
        </View>
        <View>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>290</Text>
          <Text>Deliveries</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: wp(4) }}>
        <View style={{ marginRight: wp(35) }}>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>210</Text>
          <Text>Tips</Text>
        </View>
        <View>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>2021</Text>
          <Text>on Glopilots</Text>
        </View>
      </View>
    </View>
  );
};

export default HightlightsCard;
