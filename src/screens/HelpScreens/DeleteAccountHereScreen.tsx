import { View, Text } from "react-native";
import React, { useState } from "react";
import Header from "../../widget/Header";
import HelpItem from "../../component/Help/HelpItem";
import Checkbox from "expo-checkbox";
import Btn from "../../widget/Btn";

const DeleteAccountHereScreen = () => {
  return (
    <View className="flex-1 bg-white justify-between">
      <View>
        <Header type="Back-Button" />
        <HelpItem children={"Please tell us why you’re leaving?"} />

        <HelpItem type="Check" children={"No longer need account"} />
        <HelpItem type="Check" children={"Bad experience on a trip"} />
        <HelpItem type="Check" children={"Not earning enough"} />
        <HelpItem
          type="Check"
          children={"Working with a different ride-share company"}
        />
        <HelpItem type="Check" children={"Prefer not to say"} />
      </View>
      <View className="items-center mb-5">
        <Btn label={"Continue"} route={"Delete-Confirm"} />
      </View>
    </View>
  );
};

export default DeleteAccountHereScreen;
