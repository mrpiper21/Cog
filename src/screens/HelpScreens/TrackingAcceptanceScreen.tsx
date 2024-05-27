import { View, Text } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import { Entypo } from "@expo/vector-icons";

const TrackingAcceptanceScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Header type="BackButton-Children" children={"Help"} />
      <View className="px-4 mt-8">
        <Text className="text-xl font-bold">
          Tracking acceptance and cancellation rates
        </Text>
        <View className="mt-6 space-y-2 px-4">
          {/**Header */}
          <Text className="text-base font-bold">Acceptance Rates:</Text>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="black" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugit veniam eveniet, debitis facere numquam, ipsum error suscipit
              vero id eum voluptates repellendus ipsam qui modi nihil. Animi,
              quis vitae!
            </Text>
          </View>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="black" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugit veniam eveniet, debitis facere numquam, ipsum error suscipit
              vero id eum voluptates repellendus ipsam qui modi nihil. Animi,
              quis vitae!
            </Text>
          </View>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="black" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugit veniam eveniet, debitis facere numquam, ipsum error suscipit
              vero id eum voluptates repellendus ipsam qui modi nihil. Animi,
              quis vitae!
            </Text>
          </View>
        </View>
        <View className="mt-6 space-y-2 px-4">
          {/**Header */}
          <Text className="text-base font-bold">Cancellation Rates:</Text>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="black" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugit veniam eveniet, debitis facere numquam, ipsum error suscipit
              vero id eum voluptates repellendus ipsam qui modi nihil. Animi,
              quis vitae!
            </Text>
          </View>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="black" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugit veniam eveniet, debitis facere numquam, ipsum error suscipit
              vero id eum voluptates repellendus ipsam qui modi nihil. Animi,
              quis vitae!
            </Text>
          </View>
          <View className="flex flex-row">
            <Entypo name="dot-single" size={24} color="black" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              fugit veniam eveniet, debitis facere numquam, ipsum error suscipit
              vero id eum voluptates repellendus ipsam qui modi nihil. Animi,
              quis vitae!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackingAcceptanceScreen;
