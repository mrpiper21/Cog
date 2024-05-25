import { View, Text } from "react-native";
import React from "react";
import BackButton from "../Buttons/BackButton";
import { AntDesign } from "@expo/vector-icons";

interface HeaderProps {
  title: String;
}

const HeaderFAQ: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="mt-10 flex flex-row items-center justify-between mx-4">
      <BackButton />
      <Text className="text-xl font-bold">{title}</Text>
      <View className="p-2 border-2 border-[#EEEE] rounded-full">
        <AntDesign name="questioncircle" size={24} color="black" />
      </View>
    </View>
  );
};

export default HeaderFAQ;
