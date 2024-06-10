import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HeaderFAQ from "../../../widget/Header/HeaderFAQ";
import {
  UserContext,
  useUserContext,
} from "../../../hooks/Usercontext/UserContext";
import Btn from "../../../widget/Btn";

const WalletScreen = () => {
  const User = React.useContext(useUserContext);
  return (
    <View className="flex-1 bg-white justify-between">
      <View>
        <HeaderFAQ title={"Cash Out"} />
        <View className="m-4 space-y-2">
          <Text>Current balance</Text>
          <Text className="text-xl font-bold">{User?.user.walletBalance}</Text>
        </View>
        <View className="space-y-4 mx-4">
          <View className="flex flex-row items-center space-x-4 py-3 border-b-2 border-[#EEEE]">
            <View className="p-3 bg-[#EEEE] rounded-full ">
              <MaterialIcons name="bolt" size={30} color="black" />
            </View>
            <View>
              <Text className="text-base font-bold">Instant-$1.00 fee</Text>
              <Text>Funds transferred in minutes</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between py-3 border-b-2 border-[#EEEE]">
            <View className="flex flex-row items-center space-x-4">
              <View className="p-3 bg-blue-100 rounded-full">
                <MaterialCommunityIcons name="bank" size={30} color="blue" />
              </View>
              <Text className="text-base font-bold">Bank account - 88789</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </View>
        </View>
        <View className="items-center mt-4">
          <Btn label={"Manage payment methods"} type="cancel" />
        </View>
      </View>
      <View className="mb-4 space-y-3">
        <View className="flex flex-row mx-4 items-center justify-between">
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-base font-bold">You receive</Text>
            <Ionicons name="alert-circle" size={24} color="black" />
          </View>
          <Text className="text-base font-bold">$195.15</Text>
        </View>
        <View className="items-center ">
          <Btn label={"confirm"} type="action" />
        </View>
      </View>
    </View>
  );
};

export default WalletScreen;
