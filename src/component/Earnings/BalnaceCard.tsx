import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const BalnaceCard = () => {
  return (
    <View className="py-2 border-b-2 border-[#EEEE]">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text>Balance: $196.15</Text>
          <Text>Payment scheduled for Apr 26</Text>
        </View>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </View>
      <TouchableOpacity className="flex items-center justify-center w-[146px] h-[48px] bg-[#4460EF] rounded-lg my-2">
        <Text className="text-white">Cash out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BalnaceCard;
