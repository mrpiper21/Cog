import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

interface searchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearBarContainer: React.FC<searchProps> = ({ setSearch, setTyping }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSubContainer}>
        <TouchableOpacity onPress={() => setSearch(false)}>
          <MaterialIcons name="keyboard-backspace" size={wp(6)} color="black" />
        </TouchableOpacity>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SearBarContainer;

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    backgroundColor: "white",
    height: hp(13),
  },
  searchSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(90),
    height: hp(6),
    borderRadius: wp(10),
    marginTop: hp(6),
    borderColor: "lightgray",
    borderWidth: 1,
    paddingHorizontal: wp(3),
  },
  searchInput: {
    width: wp(80),
    height: hp(4),
  },
});
