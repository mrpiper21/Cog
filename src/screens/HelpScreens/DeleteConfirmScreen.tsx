import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import Btn from "../../widget/Btn";

const DeleteConfirmScreen = () => {
  return (
    <View className="flex-1 px-4 bg-white">
      <Header type="Back-Button" />
      <View className="flex-1 items-center justify-between">
        <View className="items-center space-y-4 mt-20">
          <Image source={require("../../../assets/carIMG.png")} />
          <Text className="text-lg font-bold">We're sad to see you go!</Text>
          <Text className="text-base w-[350px] items-center justify-center">
            If you can change your mind, you can restore your account by signing
            in to any of your Glopilots profiles within 7 days.
          </Text>
        </View>
        <View className="space-y-3 mb-6">
          <View>
            <Btn
              label={"Delet Account"}
              type="action"
              route={"Delete-Success"}
            />
          </View>
          <View>
            <Btn label={"cancel"} type="cancel" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeleteConfirmScreen;
