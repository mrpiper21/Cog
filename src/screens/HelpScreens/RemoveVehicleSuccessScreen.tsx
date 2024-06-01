import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Btn from "../../widget/Btn";

const RemoveVehicleSuccessScreen = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View className="items-center space-y-4">
        <AntDesign name="checkcircle" size={90} color="green" />
        <Text className="text-lg font-bold">Submitted</Text>
        <View className="flex items-center">
          <Text className="text-base w-[320px]">
            Your request to remove vehicle was successfully submitted.
          </Text>
        </View>
        <View>
          <Btn type="action" label={"ok"} />
        </View>
      </View>
    </View>
  );
};

export default RemoveVehicleSuccessScreen;
