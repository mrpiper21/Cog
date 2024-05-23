import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TripInformation = () => {
  return (
    <View
      className="space-y-3"
      style={{ padding: wp(3), backgroundColor: "white", marginTop: wp(2) }}
    >
      <Text style={{ fontSize: wp(4), fontWeight: "600" }}>
        Trip Information
      </Text>
      <View style={styles.tripRequestContainer}>
        <Text>Trip Requested</Text>
        <Text>90</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Accepted</Text>
        <Text>90</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Declined</Text>
        <Text>90</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.viewTripBtn}>
          <Text>Vew Trip History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TripInformation;

const styles = StyleSheet.create({
  viewTripBtn: {
    height: hp(7),
    width: wp(90),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#4460EF",
    borderRadius: wp(2),
    marginVertical: wp(2),
  },
  tripRequestContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp(3),
    borderBottomWidth: 1,
    borderColor: "#F5F5F5",
  },
});
