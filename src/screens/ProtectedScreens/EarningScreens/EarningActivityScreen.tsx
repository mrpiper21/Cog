import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TripCard from "../../../component/Earnings/TripCard";

const EarningActivityScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
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
      <View className="gap-2">
        <View>
          <TripCard />
        </View>
        <View>
          <TripCard />
        </View>
        <View>
          <TripCard />
        </View>
        <View>
          <TripCard />
        </View>
        <View>
          <TripCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default EarningActivityScreen;
