import { View, Text, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

const EarningPromotionCard = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-3">
        <Image source={require("../../../assets/Vector.png")} />
        <View>
          <Text className="text-base font-semibold">Upcomming promotions</Text>
          <Text>See what's available</Text>
        </View>
      </View>
      <EvilIcons name="chevron-right" size={30} color="black" />
    </View>
  );
};

export default EarningPromotionCard;
