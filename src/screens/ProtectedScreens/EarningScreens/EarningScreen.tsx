import { View, Text, Image } from "react-native";
import React from "react";

import { ScrollView } from "react-native";
import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/dev";
import EarningDashboard from "../../../component/Earnings/EarningDashboard";
import BalnaceCard from "../../../component/Earnings/BalnaceCard";
import EarningPromotionCard from "../../../component/Earnings/EarningPromotionCard";
import EarningUpcommingPromCard from "../../../component/Earnings/EarningUpcommingPromCard";
import CancelBtn from "../../../widget/Buttons/CancelBtn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
      <EarningDashboard />
      <BalnaceCard />
      <View className="space-y-3 py-3 border-b-2 border-[#EEEE]">
        <Text className="text-lg font-semibold">More ways to earn</Text>
        <EarningPromotionCard />
      </View>
      <EarningUpcommingPromCard />
    </ScrollView>
  );
};

export default EarningScreen;
