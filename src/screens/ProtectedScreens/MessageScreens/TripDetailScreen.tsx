import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import { AntDesign, Octicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from "react-native-maps";

const TripDetailScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.headerItem}>
        <BackButton />
        <Text style={{ fontSize: wp(5), fontWeight: "600" }}>Trip Details</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <AntDesign name="questioncircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="space-y-4" style={{ padding: wp(3) }}>
        <Text>GlopilotsX Mar 4, 2024 04: 16 PM</Text>
        <Text style={{ fontWeight: "600", fontSize: wp(6) }}>$39.33</Text>
        <Text>Fixed fare: $27.55</Text>
        <View
          style={{
            width: wp(95),
            height: hp(6),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: wp(2),
            backgroundColor: "#E6F7F0",
          }}
        >
          <Text>Congratulations! You got a tip of $3.</Text>
        </View>
        <TouchableOpacity
          style={{
            height: hp(5),
            width: wp(40),
            borderRadius: wp(2),
            backgroundColor: "#4460EF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Thanks for the trip!</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: wp(4) }}>
        <MapView style={{ width: wp(100), height: hp(30) }} />
      </View>
      <View
        className="space-x-16"
        style={{ flexDirection: "row", padding: wp(3) }}
      >
        <View>
          <Text>Duration</Text>
          <Text style={{ fontSize: wp(3.5), fontWeight: "600" }}>
            13 min 20 sec
          </Text>
        </View>
        <View>
          <Text>Distance</Text>
          <Text style={{ fontSize: wp(3.5), fontWeight: "600" }}>4.5mi</Text>
        </View>
      </View>
      <View className="space-y-5" style={{ padding: wp(3) }}>
        <Text>5396 North Reese Avenue, Fresno CA 93722, US</Text>
        <Text>2042 High Street, Oakland CA 94601, US</Text>
        <View
          className="space-x-2"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="diamond" size={wp(4)} color="blue" />
          <Text>2 point earned</Text>
        </View>
      </View>
    </View>
  );
};

export default TripDetailScreen;

const styles = StyleSheet.create({
  helpIcon: {
    height: wp(10),
    width: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(10),
  },
  headerItem: {
    marginTop: wp(12),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(3),
  },
});
