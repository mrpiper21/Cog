import { View, Text, Image } from "react-native";
import React from "react";
import PromotionCard from "../../../component/Opportunity/PromotionCard";

const PromotionScreen = () => {
  return (
    <View>
      <View className="flex-1 bg-white flex-col items-center gap-4 mt-4">
        <View>
          <PromotionCard />
        </View>
        <View>
          <PromotionCard />
        </View>
        <View>
          <PromotionCard />
        </View>
        <View>
          <PromotionCard />
        </View>
      </View>
    </View>
  );
};

export default PromotionScreen;
