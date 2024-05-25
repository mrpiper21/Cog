import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const EarningStatDetails = () => {
  return (
    <View style={{ marginTop: wp(6) }} className="space-y-4">
      <Text className="text-lg font-bold">Stats</Text>
      <View className="flex flex-row">
        <View style={{ marginRight: wp(25) }}>
          <Text>Online</Text>
          <Text className="text-base font-bold">52 h 31 m</Text>
        </View>
        <View>
          <Text>Trips/Rides</Text>
          <Text className="text-base font-bold">13</Text>
        </View>
      </View>
      <View>
        <Text>Points</Text>
        <Text className="text-base font-bold">13</Text>
      </View>
      <View className="py-2 border-b-2 border-[#EEEE]">
        <Text className="text-lg font-bold">Breakdown</Text>
        <View className="flex flex-row items-center justify-between">
          <Text>Net fare</Text>
          <Text className="text-base font-bold">$196.15</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text>Total earnings</Text>
        <Text className="text-base font-bold">$196.15</Text>
      </View>
      <View>
        <Text className="text-lg font-bold mt-2">Other amounts</Text>
        <View className="flex flex-row items-center justify-between mt-2">
          <Text>Cash collected</Text>
          <Text className="text-base font-bold">$196.15</Text>
        </View>
      </View>
    </View>
  );
};

export default EarningStatDetails;
