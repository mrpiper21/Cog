import { View, Text } from "react-native";
import React from "react";
import CancelBtn from "./Buttons/CancelBtn";
import BackButton from "./Buttons/BackButton";
interface HeaderProps {
  type:
    | "Close"
    | "Close-Children"
    | "Back-Button"
    | "BackButton-Children"
    | "BackButton-Children-FAQ"
    | "BackButton-Children-Bars";
  children: String;
}
const Header: React.FC<HeaderProps> = ({ type, children }) => {
  return (
    <>
      {type === "Close-Children" ? (
        <View className="flex flex-row items-center justify-between mt-10 px-4">
          <Text className="text-xl font-bold">{children}</Text>
          <CancelBtn />
        </View>
      ) : type === "BackButton-Children" ? (
        <View className="flex flex-row mt-10 px-4 space-x-28 items-center">
          <BackButton />
          <Text className="text-xl font-bold">{children}</Text>
        </View>
      ) : (
        <View>
          <View className="flex flex-row items-center mt-10 space-x-28 px-4">
            <BackButton />
            <Text className="text-xl font-bold">{children}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Header;
