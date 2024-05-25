import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import RouteItem from "../../../widget/RouteItem";
import BackButton from "../../../widget/Buttons/BackButton";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const EarningTripDetailScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="mt-10 flex flex-row items-center justify-between mx-4">
        <BackButton />
        <Text>Trip Details</Text>
        <View className="p-2 border-2 border-[#EEEE] rounded-full">
          <AntDesign name="questioncircle" size={24} color="black" />
        </View>
      </View>
      <View className="mt-8">
        <View className=" items-center">
          {/**Earning Trip details card */}
          <View className="space-y-2 mb-2">
            <Text>Your Earnings</Text>
            <Text className="text-xl font-bold">$230.45</Text>
            <Text>Upfront fare: $120</Text>
          </View>
        </View>
        <View className="items-center mt-2">
          <MapView className="w-full h-[160px] rounded-t-2 overflow-hidden flex " />
        </View>
        <View className="m-4 space-y-4">
          <View className="flex flex-row space-x-20 my-3">
            <View>
              <Text>Duration</Text>
              <Text className="text-base font-bold">13 min 20 sec</Text>
            </View>
            <View>
              <Text>Distance</Text>
              <Text className="text-base font-bold">4.5 ml</Text>
            </View>
          </View>
          <TouchableOpacity className="flex flex-row space-x-8">
            <View className="items-center">
              <RouteItem />
            </View>
            <View className="justify-between">
              <Text>5396 North Reese Avenue, Fresno CA 93722, US</Text>
              <Text>2042 High Street, Oakland CA 94601, US</Text>
            </View>
          </TouchableOpacity>
          <View className="items-center my-3">
            <View className="flex flex-row items-center px-4 space-x-3 rounded-lg bg-[#E6F7F0] w-[388px] h-[98px]">
              <AntDesign name="arrowup" size={24} color="black" />
              <Text className="w-[280px]">
                Your fare went up because the actual drop-off was farther away
                than the one your rider requested.
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center pb-3 border-b-2 border-[#EEEE]">
            <Text>Vehicle Type</Text>
            <Text>GlipilotsX</Text>
          </View>
          <View className="flex flex-row justify-between items-center pb-3 border-b-2 border-[#EEEE]">
            <Text>Time Requested</Text>
            <Text>03:45 PM</Text>
          </View>
          <View className="flex flex-row justify-between items-center pb-3 border-b-2 border-[#EEEE]">
            <Text>Date Requested</Text>
            <Text>Sunday, April 20, 2024</Text>
          </View>
          <Text className="text-lg font-bold">Paid to you</Text>
          <View className="flex flex-row justify-between items-center pb-3 border-b-2 border-[#EEEE]">
            <Text>Fare</Text>
            <EvilIcons name="chevron-down" size={24} color="black" />
          </View>
          <View className="flex flex-row justify-between items-center pb-3 border-b-2 border-[#EEEE]">
            <Text>More Details</Text>
            <EvilIcons name="chevron-down" size={24} color="black" />
          </View>
          <View className="flex flex-row justify-between items-center pb-3">
            <Text>Upfront Fare</Text>
            <EvilIcons name="chevron-down" size={24} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EarningTripDetailScreen;
