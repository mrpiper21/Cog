import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const DeleteSuccessScreen = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View className="items-center space-y-4">
        <AntDesign name="checkcircle" size={90} color="green" />
        <Text className="text-lg font-bold">Account Deletion</Text>
        <Text className="text-base w-[320px]">
          Your request for Account Deletion was successfully submitted. You will
          now be logged out.
        </Text>
      </View>
    </View>
  );
};

export default DeleteSuccessScreen;
