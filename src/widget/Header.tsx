import { View, Text } from "react-native";
import React from "react";
import CancelBtn from "./Buttons/CancelBtn";
interface HeaderProps {
  type:
    | "Close"
    | "Close-Children"
    | "Back"
    | "Back-Button"
    | "BackButton-Children"
    | "BackButton-Children-FAQ"
    | "BackButton-Children-Bars";
  children: String;
}
const Header: React.FC<HeaderProps> = ({ type, children }) => {
  return (
    <>
      {type === "Close-Children" && (
        <View className="flex flex-row items-center justify-between mt-10 px-4">
          <Text className="text-xl font-bold">{children}</Text>
          <CancelBtn />
        </View>
      )}
    </>
  );
};

export default Header;
