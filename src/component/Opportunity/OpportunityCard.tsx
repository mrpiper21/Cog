import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, EvilIcons, Feather } from "@expo/vector-icons";
import MapView from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface OpportunitCardProps {
  action: "save" | "cancel";
}

const OpportunityCard: React.FC<OpportunitCardProps> = ({ action }) => {
  return (
    <View className="flex flex-row justify-between mb-1 bg-white p-3">
      <View className="flex justify-between">
        <Text>03:00 PM - 04:00 PM</Text>
        <View style={{ width: wp(40) }}>
          <Text className="text-lg font-semibold">
            You’re confirmed for $3.5 extra on every trip
          </Text>
        </View>
        <Text>Boost+</Text>
        <TouchableOpacity className="flex flex-row w-[99px] h-[40px] items-center justify-center space-x-1 py-2 bg-slate-200 rounded-lg">
          {action === "cancel" ? (
            <EvilIcons name="close" size={20} color="red" />
          ) : (
            <Feather name="bookmark" size={24} color="black" />
          )}
          {action === "cancel" ? (
            <Text className="text-red-500">Cancel</Text>
          ) : (
            <Text>Save</Text>
          )}
        </TouchableOpacity>
      </View>
      <View className="flex justify-between items-end space-y-10 ">
        <Ionicons name="chevron-forward" size={24} color="black" />
        <View className="w-[120px] h-[120px] rounded-lg overflow-hidden flex items-center justify-center">
          <MapView className="w-full h-full" />
        </View>
      </View>
    </View>
  );
};

export default OpportunityCard;
