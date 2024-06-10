import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../widget/Btn";

const DeleteDriverAccountScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View className="flex-1 bg-white">
      <Header type="BackButton-Children" children={"Help"} />
      <View className="mx-4 my-6 space-y-10">
        <Text className="text-xl font-bold">Delet my Driver account</Text>
        <View>
          <Text className="text-base">
            We're sorry you're leaving! Once your account is deleted, it can't
            be recovered. You can delete your account here. If you need help,
            contact our Partner Phone Support.
          </Text>
        </View>
        <View className="items-center">
          <View className="p-2 border-2 space-y-3 border-[#EEEE] rounded-lg">
            <Text className="text-base font-bold">
              Can we help with anything else?
            </Text>
            <View style={{ alignItems: "center" }}>
              <Btn
                label={"Yes"}
                type="cancel"
                callback={() => navigation.navigate("Delete-Here")}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Btn label={"No"} type="cancel" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeleteDriverAccountScreen;
