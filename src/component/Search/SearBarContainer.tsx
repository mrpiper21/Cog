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
    <View
      style={{
        zIndex: 1,
        // flex: 1,
        marginTop: 40,
        alignItems: "flex-start",
        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: "gray",
      }}
    >
      <TouchableOpacity className="mr-4" onPress={() => setSearch(false)}>
        <MaterialIcons name="keyboard-backspace" size={wp(6)} color="black" />
      </TouchableOpacity>
      <GooglePlacesAutocomplete
        placeholder="Enter Location"
        minLength={2}
        // autoFocus={false}
        // returnKeyType={"default"}
        fetchDetails={true}
        query={{
          key: API_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            // backgroundColor: "grey",
            // height: 60,
          },
          textInput: {
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
            borderWidth: 1,
            borderColor: "gray",
            width: "50%",
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
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

// {
// }
