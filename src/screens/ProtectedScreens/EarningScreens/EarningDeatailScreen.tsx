import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../../widget/Buttons/BackButton";
import EarningDetailsDashboard from "../../../component/Earnings/EarningDetailsDashboard";
import { useNavigation } from "@react-navigation/native";

const EarningDeatailScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View className="flex-1 bg-white px-3">
      <View className="flex flex-row items-center justify-between mt-10">
        <BackButton />
        <Text className="text-lg font-bold">Earning Details</Text>
        <TouchableOpacity className="p-2 rounded-full border-2 border-[#EEEEEE]">
          <AntDesign name="questioncircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/**Earning Darshboard */}
      <EarningDetailsDashboard />
      <View style={{ marginVertical: wp(8) }} className="items-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("EarningActivity")}
          className="items-center justify-center h-[56px] w-[388px] bg-[#EEEE] rounded-lg"
        >
          <Text>See earnings activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EarningDeatailScreen;
