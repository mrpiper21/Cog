import { View, Text, Image } from "react-native";
import React from "react";
import Responsiveness from "../../helpers/Responsiveness";

const PromotionCard = () => {
  return (
    <View style={{height: Responsiveness.getResponsiveHeight(12), width: Responsiveness.getResponsiveWidth(90)}} className=" flex flex-row items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
        <View className="space-y-2">
          <Text className="text-base font-semibold">
            $50 extra by completing 50 trips
          </Text>
          <Text>By Friday, 07:00 PM</Text>
        </View>
        <Image source={require("../../../assets/Vector.png")} />
      </View>
  );
};

export default PromotionCard;
