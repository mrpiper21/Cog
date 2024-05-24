import { View, Text, Image } from "react-native";
import React from "react";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/dev";
import CancelBtn from "../../../widget/Buttons/CancelBtn";
import BarChartItem from "../../../widget/BarChart";
const EarningScreen = () => {
  let [fontLoaded] = useFonts({ OpenSans_400Regular });
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white px-4"
    >
      <View
        style={{
          marginTop: wp(13),
        }}
        className="flex flex-row items-center justify-between"
      >
        <Text
          style={{ fontFamily: "OpenSans_400Regular", fontWeight: "700" }}
          className="text-xl"
        >
          Earnings
        </Text>
        <CancelBtn />
      </View>
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
        <View style={{ marginTop: wp(4) }}>
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
          <TouchableOpacity className="bg-[#EEEEEE] w-[388px] h-[56px] items-center justify-center rounded-lg">
            <Text>See details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="py-2 border-b-2 border-[#EEEE]">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text>Balance: $196.15</Text>
            <Text>Payment scheduled for Apr 26</Text>
          </View>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </View>
        <TouchableOpacity className="flex items-center justify-center w-[146px] h-[48px] bg-[#4460EF] rounded-lg">
          <Text className="text-white">Cash out</Text>
        </TouchableOpacity>
      </View>
      <View className="space-y-3 py-3 border-b-2 border-[#EEEE]">
        <Text className="text-lg font-semibold">More ways to earn</Text>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center space-x-3">
            <Image source={require("../../../../assets/Vector.png")} />
            <View>
              <Text className="text-base font-semibold">
                Upcomming promotions
              </Text>
              <Text>See what's available</Text>
            </View>
          </View>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </View>
      </View>
      <View className="space-y-3 py-3 border-b-2 border-[#EEEE]">
        <Text className="text-lg font-semibold">More ways to earn</Text>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-start space-x-3">
            <MaterialCommunityIcons name="gift" size={wp(8)} color="black" />
            <View>
              <Text className="text-base font-semibold">
                Upcomming promotions
              </Text>
              <View style={{ width: wp(40) }}>
                <Text>
                  Invite someone you know to join Glopilots and make money on
                  their own schedule. Terms apply.
                </Text>
              </View>
            </View>
          </View>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </View>
      </View>
    </ScrollView>
  );
};

export default EarningScreen;
