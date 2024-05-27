import { View, Text } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import HelpItem from "../../component/Help/HelpItem";

const AccountAppScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Header type="BackButton-Children" children={"Help"} />
      <HelpItem children={"Account & App"} />
      <HelpItem type="forward" children={"Unable to sign in"} />
      <HelpItem
        type="forward"
        children={"Changing account settings"}
        navigateTo="ChangeAcc-Setting"
      />
      <HelpItem type="forward" children={"Updating vehicles and documents"} />
      <HelpItem type="forward" children={"Getting Paid"} />
      <HelpItem type="forward" children={"Fares"} />
      <HelpItem type="forward" children={"Promotions"} />
      <HelpItem type="forward" children={"Referrals"} />
      <HelpItem type="forward" children={"Wallet"} />
      <HelpItem type="forward" children={"Fees and charges"} />
    </View>
  );
};

export default AccountAppScreen;
