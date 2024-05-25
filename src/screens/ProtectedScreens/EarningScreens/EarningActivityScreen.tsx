import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from "react-native-maps";

const EarningActivityScreen = () => {
  return (
    <View className="flex-1">
      <View className="py-2 bg-white space-y-4 px-6">
        <View
          style={{ marginTop: wp(13) }}
          className="flex flex-row items-center justify-between"
        >
          <BackButton />
          <Text className="text-lg font-bold">Earning Activity</Text>
          <TouchableOpacity className="p-2 items-center justify-center border-2 border-[#EEEE] rounded-full">
            <Ionicons name="reorder-three-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row space-x-3">
          <TouchableOpacity className="flex flex-row items-center space-x-2 p-2 bg-[#EEEE] rounded-lg">
            <Text>Type</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center space-x-2 p-2 bg-[#EEEE] rounded-lg">
            <Text>Feature</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center space-x-2 p-2 bg-[#4460EF] rounded-lg">
            <FontAwesome5 name="calendar-day" size={wp(4)} color="white" />
            <Text className="text-white">13 Mar - 26 - 26 April</Text>
            <Entypo name="chevron-small-down" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="my-4 mx-6">
        <Text className="text-lg font-bold">Wednesday, Mar 6</Text>
      </View>
      <View>
        <View className="flex flex-row items-center justify-between px-6">
          <View>
            <Text className="text-base font-bold">$230.45</Text>
            <Text>GlopilotsX . Mar 4 2024 . 04: 16 PM</Text>
          </View>
          <Text>3.4</Text>
        </View>
        <View className="items-center mt-2">
          <MapView className="w-[400px] h-[160px] rounded-t-2 overflow-hidden flex " />
        </View>
        <View></View>
        <View>
          <Text>5396 North Reese Avenue, Fresno CA 93722, US</Text>
          <Text>2042 High Street, Oakland CA 94601, US</Text>
        </View>
      </View>
    </View>
  );
};

export default EarningActivityScreen;
