import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import HelpItem from "../../component/Help/HelpItem";
import Header from "../../widget/Header";
import SearchItems from "./Search/SearchItems";

const HelpScreen = () => {
  const [searchResult, setSearchResult] = useState() as any;

  const handleTextInput = (text: string) => {
    const lower = text.toLowerCase();
    SearchItems.map(({ children, item }) => {
      let found = children.toLowerCase().indexOf(lower);
      if (found !== -1) {
        setSearchResult(item);
      }
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
    >
      <Header type="Close-Children" children={"Help"} />
      <View className="items-center mt-5">
        <View
          style={{ width: wp(95) }}
          className="flex flex-row items-center h-[56px] rounded-lg border-2 border-[#EEEE] space-x-3 p-2"
        >
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            onChangeText={(text) => handleTextInput(text)}
            className="w-[377px] py-2"
            placeholder="Search..."
          />
        </View>
      </View>
      {searchResult ? (
        searchResult
      ) : (
        <>
          <View className="p-4 border-y-2 border-[#EEEE] mt-4">
            <Text className="text-xl font-bold">All Topics</Text>
          </View>
          <HelpItem type="Trips" children={"Trips"} navigateTo="Help-Trip" />
          <HelpItem
            type="Fixtures"
            children={"Account & App"}
            navigateTo="Account-App"
          />
          <HelpItem type="Fixtures" children={"Earnings"} />
          <HelpItem type="Fixtures" children={"Guides"} />
          <HelpItem type="Fixtures" children={"Item Delivery"} />
          <HelpItem type="Fixtures" children={"Safety"} />
          <HelpItem type="Fixtures" children={"Appointments"} />
          <HelpItem children={"Support"} />
          <HelpItem type="Call support" children={"Call support"} />
        </>
      )}
    </ScrollView>
  );
};

export default HelpScreen;
