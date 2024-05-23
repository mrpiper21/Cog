import { View, Text } from "react-native";
import React from "react";
import ThumbsDownItem from "./ThumbsDownItem";
import ThumbsUpItem from "./ThumbsUpItem";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface DeliverItemProps {
  preview: Boolean;
}

const DeliveryItems = () => {
  return (
    <View style={{ padding: wp(3) }}>
      <View style={{ alignItems: "center", marginTop: wp(2) }}>
        <MaterialIcons name="thumb-up" size={wp(10)} color="black" />
        <Text style={{ fontSize: wp(4), fontWeight: "600" }}>99%</Text>
      </View>
      <View style={{ marginTop: wp(4) }}>
        <Text style={{ fontSize: wp(4), fontWeight: "500" }}>
          Satisfaction details
        </Text>
        <View style={{ marginTop: wp(4) }}>
          <Text style={{ fontSize: wp(3.5) }}>Vendor</Text>
          <View style={{ alignItems: "center", gap: wp(5), marginTop: wp(3) }}>
            {/**Thumbs up container */}
            <ThumbsUpItem />
            <ThumbsDownItem />
          </View>
        </View>
        <View style={{ marginTop: wp(6) }}>
          <Text>Customer</Text>
          <View style={{ alignItems: "center", gap: wp(5) }}>
            <ThumbsUpItem />
            <ThumbsDownItem />
          </View>
        </View>
        <View style={{ alignItems: "center", marginVertical: wp(5) }}>
          <Text>Last 300 ratings</Text>
        </View>
      </View>
      <View style={{ padding: wp(3), borderTopWidth: 8, borderColor: "#EEEE" }}>
        <Text style={{ fontWeight: "500", fontSize: wp(4.5) }}>
          Recent feedback
        </Text>
        <View style={{ marginTop: wp(2) }}>
          <Text style={{ fontSize: wp(3.5) }}>
            When you get feedback like this, it means the customer wasn’t
            satisfied with your service. Top rated delivery people suggest that
            being polite, professional, and paying attention to details usually
            works well.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryItems;
