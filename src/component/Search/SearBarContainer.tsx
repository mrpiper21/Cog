import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "../../Services/authorization";
import { useNavigation } from "@react-navigation/native";

interface searchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setTyping: React.Dispatch<React.SetStateAction<boolean>>;
}
// console.log("api key...", process.env.API_KEY);

const SearBarContainer: React.FC<searchProps> = ({
  setSearch,
  setTyping
  // setSearchLoction,
}) => {
  const autoCompleteRef = React.useRef(null)
  const nav = useNavigation() as any;
  const handleTypingChange = (text: string) => {
    console.log("typing...")
    setTyping(true);
  };

  return (
    <View
      style={styles.searchContainer}
      className="space-x-2"
    >
      <GooglePlacesAutocomplete
        ref={autoCompleteRef}
        placeholder="Enter Location"
        minLength={2}
        // autoFocus={false}
        // returnKeyType={"default"}
        // onTextInput={handleTypingChange}
        onPress={(data, details = null) => {
          const loc = details?.geometry.location;
          console.log("marker coordinate...", loc?.lat, loc?.lng);
          const location = loc
          nav.navigate("Home", {location})
          
          // setSearchLoction({ lat: loc?.lat, lng: loc?.lng });
          setSearch(false);
          console.log(data)
          console.log(JSON.stringify(details));
        }}
        fetchDetails={true}
        isRowScrollable={true}
        query={{
          key: API_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {},
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
      <TouchableOpacity onPress={() => setSearch(false)}>
        <MaterialIcons name="cancel" size={wp(6)} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearBarContainer;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: wp(7),
    alignItems: "flex-start",
    justifyContent: 'center',
    flexDirection: "row",
    paddingHorizontal: wp(2),
    paddingTop: wp(5),
    backgroundColor: 'white'
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
