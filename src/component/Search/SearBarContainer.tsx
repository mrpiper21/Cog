import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "../../Services/authorization";

interface searchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  // setTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearBarContainer: React.FC<searchProps> = ({ setSearch }) => {
  return (
    <View style={{ zIndex: 1, flex: 0.5, marginTop: 40 }}>
      <GooglePlacesAutocomplete
        placeholder="Search places"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(details?.geometry?.location));
          console.log(data, details);
          // setTyping(true);
        }}
        query={{
          key: API_KEY,
          language: "en",
        }}
        onFail={(error) => console.log(error)}
        styles={{
          textInputContainer: {
            width: "auto",
          },
          textInput: {
            height: 38,

            color: "#5d5d5d",
            fontSize: 16,
          },
        }}
      />
    </View>
  );
};

export default SearBarContainer;

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    backgroundColor: "white",
    height: hp(13),
    marginTop: 30,
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

{
  /* <TouchableOpacity onPress={() => setSearch(false)}>
  <MaterialIcons name="keyboard-backspace" size={wp(6)} color="black" />
</TouchableOpacity>; */
}
