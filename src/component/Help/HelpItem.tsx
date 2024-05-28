import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

interface HelpItemProps {
  children: String;
  type?: "Trips" | "Fixtures" | "Call support" | "forward" | "Check";
  navigateTo?:
    | "Help-Trip"
    | "Account-App"
    | "Tracking-Acceptance"
    | "ChangeAcc-Setting"
    | "DeleteDriver-Acc";
}

const HelpItem: React.FC<HelpItemProps> = ({ children, type, navigateTo }) => {
  const navigation = useNavigation() as any;
  const [isChecked, setChecked] = useState(false);
  return (
    <>
      {type === "Trips" ? (
        <TouchableOpacity
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
          className="flex flex-row items-center justify-between p-4 border-b-2 border-[#EEEE] mt-4"
        >
          <View className="flex flex-row items-center">
            <Entypo name="flow-line" size={wp(7)} color="black" />
            <Text className="text-base">{children}</Text>
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
            <Text className="text-base">{children}</Text>
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
            <Text className="text-base">{children}</Text>
          </View>
        </TouchableOpacity>
      ) : type === "forward" ? (
        <TouchableOpacity
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
          className="flex flex-row items-center justify-between p-4 border-b-2 border-[#EEEE] mt-4"
        >
          <Text className="text-base">{children}</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      ) : type === "Check" ? (
        <TouchableOpacity
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
          className="flex flex-row items-center space-x-4 p-4 border-b-2 border-[#EEEE] mt-4"
        >
          <Checkbox
            style={{ margin: 6 }}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text className="text-base">{children}</Text>
        </TouchableOpacity>
      ) : (
        !type && (
          <TouchableOpacity className="p-4 border-b-2 border-[#EEEE]">
            <Text className="text-xl font-bold">{children}</Text>
          </TouchableOpacity>
        )
      )}
    </>
  );
};

export default HelpItem;
