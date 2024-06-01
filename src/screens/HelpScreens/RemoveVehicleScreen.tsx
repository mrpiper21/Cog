import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import { RoundedCheckbox } from "react-native-rounded-checkbox";
import Btn from "../../widget/Btn";

const RemoveVehicleScreen = () => {
  return (
    <View className="flex-1 bg-white px-4 justify-between">
      <View>
        <Header type="BackButton-Children" children={"Help"} />
        <View className="space-y-4 mt-6">
          <Text className="text-lg font-bold">Remove my vehicle</Text>
          <Text className="text-base">
            If you're no longer using the vehicle currently listed on your
            account, kindly complete the form below so we can remove it for you.
          </Text>
          <Text className="text-xl font-bold">
            {" "}
            Which vehicle needs to be removed?
          </Text>
        </View>
        <View className="mt-4">
          <View className="flex flex-row items-center justify-between py-6 border-b-2 border-[#EEEE]">
            <View className="flex flex-row space-x-4">
              <Image source={require("../../../assets/carRMV-img.png")} />
              <View>
                <Text>Kia Sportage</Text>
                <Text>5GT44 . SUV</Text>
              </View>
            </View>
            <RoundedCheckbox
              onPress={(checked) => console.log("Checked: ", checked)}
              checkedColor="blue"
              text=""
            />
          </View>
          <View className="flex flex-row items-center justify-between py-3 border-b-2 border-[#EEEE]">
            <View className="flex flex-row space-x-4">
              <Image source={require("../../../assets/carRMV-img.png")} />
              <View>
                <Text>Toyota Camry</Text>
                <Text>5GT44 . SUV</Text>
              </View>
            </View>
            <RoundedCheckbox
              onPress={(checked) => console.log("Checked: ", checked)}
              checkedColor="blue"
              text=""
            />
          </View>
        </View>
      </View>
      <View className="mb-6">
        <Btn type="action" label={"Continue"} route={"Remove-Confirm"} />
      </View>
    </View>
  );
};

export default RemoveVehicleScreen;
