import { View } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LocationItem from "../../component/Search/LocationItem";
import HomeLoactionItem from "../../component/Search/HomeLoactionItem";
import NearbyLocationContainer from "../../component/Search/NearbyLocationContainer";
import SearBarContainer from "../../component/Search/SearBarContainer";

interface searchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchScreen: React.FC<searchProps> = ({ setSearch }) => {
  const [typing, setTyping] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {/**SearchContainer */}
      <SearBarContainer setSearch={setSearch} setTyping={setTyping} />
      {typing ? (
        <View style={{ marginTop: wp(2) }}>
          <LocationItem
            title={"Orchard View"}
            location={"2335 Orchard View Lane, Escondido CA 92027"}
          />
        </View>
      ) : (
        <View>
          {/**Home location item */}
          <HomeLoactionItem />

          {/**Nearby location item list */}
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
      )}
    </View>
  );
};

export default SearchScreen;
