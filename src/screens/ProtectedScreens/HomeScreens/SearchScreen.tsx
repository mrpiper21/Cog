import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LocationItem from "../../../component/Search/LocationItem";
import HomeLoactionItem from "../../../component/Search/HomeLoactionItem";
import NearbyLocationContainer from "../../../component/Search/NearbyLocationContainer";
import SearBarContainer from "../../../component/Search/SearBarContainer";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "../../../Services/authorization";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import STATUSBAR from "../../../widget/STATUSBAR";

interface searchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchScreen: React.FC<searchProps> = ({ setSearch }) => {
  const [typing, setTyping] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/**SearchContainer */}
      <STATUSBAR />
      <SearBarContainer setSearch={setSearch} />

      {/* {typing ? (
        <View style={{ marginTop: wp(2) }}>
          <LocationItem
            title={"Orchard View"}
            location={"2335 Orchard View Lane, Escondido CA 92027"}
          />
        </View>
      ) : (
        <View>
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
        </View>
      )} */}
    </View>
  );
};

export default SearchScreen;
