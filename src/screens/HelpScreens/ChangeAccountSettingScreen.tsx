import { View, Text } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import HelpItem from "../../component/Help/HelpItem";

const ChangeAccountSettingScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Header type="BackButton-Children" children={"Help"} />
      <HelpItem children={"Changing account settings"} />
      <HelpItem type="forward" children={"Reset your password"} />
      <HelpItem type="forward" children={"Turn on email updates"} />
      <HelpItem
        type="forward"
        children={"Delete Driver account"}
        navigateTo="DeleteDriver-Acc"
      />
      <HelpItem type="forward" children={"Updating account information"} />
      <HelpItem type="forward" children={"Driver Profiles"} />
      <HelpItem type="forward" children={"Updating bank information"} />
    </View>
  );
};

export default ChangeAccountSettingScreen;
