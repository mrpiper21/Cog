import { View, Text } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import Btn from "../../widget/Btn";

const RemoveVehicleConfirm = () => {
  return (
    <View className="flex-1 bg-white px-4 justify-between">
      <View>
        <Header type="BackButton-Children" children={"Help"} />
        <View className="space-y-4 mt-6">
          <Text className="text-lg font-bold">Remove my vehicle</Text>
          <Text className="text-base">
            You will no longer be able to access this vehicle once you removed
            it.
          </Text>
          <Text className="text-lg font-bold"> Vehicle detail</Text>
        </View>
        <View className="mt-4">
          <Text>Toyota Camry</Text>
          <Text>5GT44 . SUV</Text>
        </View>
      </View>
      <View className="mb-6 space-y-3">
        <View>
          <Btn type="action" label={"Delete"} route={"Remove-Success"} />
        </View>
        <View>
          <Btn type="cancel" label={"cancel"} />
        </View>
      </View>
    </View>
  );
};

export default RemoveVehicleConfirm;
