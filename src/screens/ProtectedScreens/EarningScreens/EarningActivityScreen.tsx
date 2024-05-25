import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../../../widget/Buttons/BackButton";

const EarningActivityScreen = () => {
  return (
    <View className="flex-1 px-3">
      <View>
        <BackButton />
        <Text>Earning Activity</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default EarningActivityScreen;
