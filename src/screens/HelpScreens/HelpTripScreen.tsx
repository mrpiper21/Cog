import { View, Text } from "react-native";
import React from "react";
import Header from "../../widget/Header";
import HelpItem from "../../component/Help/HelpItem";

const HelpTripScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Header children={"Help"} type="BackButton-Children" />
      <HelpItem children={"Trips"} />
      <HelpItem
        type="forward"
        children={"What iOS version do I need to accept trips?"}
      />
      <HelpItem
        type="forward"
        children={"Checking the status of your driver referrals"}
      />
      <HelpItem
        type="forward"
        children={"Tracking acceptance and cancellation rates"}
        navigateTo="Tracking-Acceptance"
      />
      <HelpItem type="forward" children={"Understanding trip ratings"} />
    </View>
  );
};

export default HelpTripScreen;
