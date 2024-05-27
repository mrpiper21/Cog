import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HelpItemProps {
  children: String;
  type?: "Trips" | "Fixtures" | "Call support";
  navigateTo?: "Help-Trip" | "Account_App";
}

const HelpItem: React.FC<HelpItemProps> = ({ children, type, navigateTo }) => {
  const navigation = useNavigation() as any;
  return (
    <>
      {type === "Trips" ? (
        <TouchableOpacity
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
          className="flex flex-row items-center justify-between p-4 border-b-2 border-[#EEEE] mt-4"
        >
          <View className="flex flex-row items-center">
            <Entypo name="flow-line" size={wp(7)} color="black" />
            <Text>{children}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      ) : type === "Fixtures" ? (
        <TouchableOpacity
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
          className="flex flex-row items-center justify-between p-4 border-b-2 border-[#EEEE] mt-4"
        >
          <View className="flex flex-row items-center space-x-3">
            <AntDesign name="bars" size={wp(7)} color="black" />
            <Text>{children}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      ) : type === "Call support" ? (
        <TouchableOpacity
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
          className="flex flex-row items-center space-x-3 p-4 border-b-2 border-[#EEEE] mt-4"
        >
          <View className="flex flex-row items-center space-x-3">
            <FontAwesome name="phone" size={wp(7)} color="black" />
            <Text>{children}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        !type && (
          <TouchableOpacity className="p-4">
            <Text className="text-xl font-bold">{children}</Text>
          </TouchableOpacity>
        )
      )}
    </>
  );
};

export default HelpItem;
