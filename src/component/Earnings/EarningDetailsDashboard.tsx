import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BarChartItem from "../../widget/BarChart";
import EarningStatDetails from "./EarningStatDetails";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

const EarningDetailsDashboard = () => {
  return (
    <View>
      <View
        style={{ marginTop: wp(5) }}
        className="flex flex-row items-center justify-between"
      >
        <View>
          <Text>Mar 05 - Mar 12</Text>
          <Text className="text-xl font-bold">$196.15</Text>
        </View>
        <TouchableOpacity
          style={{ padding: wp(1.5) }}
          className="flex flex-row items-center space-x-1 bg-[#EEEEEE] rounded-lg"
        >
          <Ionicons name="calendar-sharp" size={24} color="black" />
          <Text>13 Mar - 26 Apr</Text>
          <Feather name="chevron-down" size={wp(3)} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ marginTop: wp(4) }}>
          <BarChartItem />
        </View>
        {/**Earning Stats details */}
        <EarningStatDetails />
      </View>
    </View>
  );
};

export default EarningDetailsDashboard;
