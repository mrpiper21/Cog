import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BarChartItem from "../../widget/BarChart";
import CancelBtn from "../../widget/Buttons/CancelBtn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const EarningDashboard = () => {
  const navigation = useNavigation() as any;
  return (
    <View>
      <View style={{ marginVertical: wp(4) }}>
        <View>
          <Text>Mar 05 - Mar 12</Text>
          <Text
            className="text-xl font-bold"
            style={{ fontFamily: "OpenSans_400Regular" }}
          >
            $196.15
          </Text>
        </View>
        <View style={{ marginTop: wp(9) }}>
          <BarChartItem />
        </View>
        <View className="flex gap-8 mt-2">
          <View className="flex flex-row items-center justify-between">
            <Text>Online</Text>
            <Text>10h 23 m</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text>Trips/Ride</Text>
            <Text>13</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text>Points</Text>
            <Text>13</Text>
          </View>
        </View>
        <View
          className="flex items-center border-b-2 border-gray-200"
          style={{ paddingVertical: wp(5) }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("EarningDetails")}
            className="bg-[#EEEEEE] w-[388px] h-[56px] items-center justify-center rounded-lg"
          >
            <Text>See details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EarningDashboard;
