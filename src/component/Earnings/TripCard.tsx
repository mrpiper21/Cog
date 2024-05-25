import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import RouteItem from "../../widget/RouteItem";

const TripCard = () => {
  return (
    <View className="p-4 bg-white">
      <View className="flex flex-row items-center justify-between px-6">
        <View className="space-y-1 mb-2">
          <Text className="text-base font-bold">$230.45</Text>
          <Text>GlopilotsX . Mar 4 2024 . 04: 16 PM</Text>
        </View>
        <Text>3.4km</Text>
      </View>
      <View className="items-center mt-2">
        <MapView className="w-[400px] h-[160px] rounded-t-2 overflow-hidden flex " />
      </View>
      <View className="flex flex-row space-x-8 m-4">
        <View className="items-center">
          <RouteItem />
        </View>
        <View className="justify-between">
          <Text>5396 North Reese Avenue, Fresno CA 93722, US</Text>
          <Text>2042 High Street, Oakland CA 94601, US</Text>
        </View>
      </View>
    </View>
  );
};

export default TripCard;
