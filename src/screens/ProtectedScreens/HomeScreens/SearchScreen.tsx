import { View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LocationItem from "../../../component/Search/LocationItem";
import HomeLoactionItem from "../../../component/Search/HomeLoactionItem";
import NearbyLocationContainer from "../../../component/Search/NearbyLocationContainer";
import SearBarContainer from "../../../component/Search/SearBarContainer";
import { MaterialIcons } from "@expo/vector-icons";

interface searchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  // setSearchLoction: React.Dispatch<
  //   React.SetStateAction<{ latitude: number; longitude: number }>
  // >;
}

const SearchScreen: React.FC<searchProps> = ({
  setSearch,
  // setSearchLoction,
}) => {
  const [typing, setTyping] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {/**SearchContainer */}
      <SearBarContainer
        // setSearchLoction={setSearchLoction}
        setSearch={setSearch}
        setTyping={setTyping}
      />

      {!typing && 
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeLoactionItem />

          <NearbyLocationContainer />
          <View style={{ marginTop: wp(2) }}>
            <LocationItem
              title={"Pleasanton"}
              location={"3959 Fairlands Drive, Pleasanton CA 94588"}
            />
            <LocationItem
              title={"Orchard View"}
              location={"2335 Orchard View Lane, Escondido CA 92027"}
            />
            <LocationItem
              title={"Orchard View"}
              location={"2335 Orchard View Lane, Escondido CA 92027"}
            />
          </View>
        </ScrollView>}
    </View>
  );
};

export default SearchScreen;
