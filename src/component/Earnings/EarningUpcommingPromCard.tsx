import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const EarningUpcommingPromCard = () => {
  return (
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
  );
};

export default EarningUpcommingPromCard;
