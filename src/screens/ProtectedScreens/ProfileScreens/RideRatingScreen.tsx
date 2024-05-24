import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RideItems from "../../../component/Rating/Rides/RideItems";
import DeliveryItems from "../../../component/Rating/Deliveries/DeliveryItems";

const RideRatingScreen = () => {
  const [preview, setPreview] = useState({
    rideItems: true,
    deliveryItems: false,
  });
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={{ fontSize: wp(4), fontWeight: "600" }}>Ratings</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <AntDesign name="questioncircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        className="space-x-2"
        style={{
          flexDirection: "row",
          padding: wp(3),
          borderBottomWidth: 1,
          borderColor: "#EEEE",
          marginTop: wp(2),
        }}
      >
        <TouchableOpacity
          onPress={() =>
            setPreview((prev) => ({
              ...prev,
              rideItems: true,
              deliveryItems: false,
            }))
          }
          style={{
            ...styles.rideBtn,
            backgroundColor: preview.rideItems ? "#4460EF" : "#EEEEEE",
          }}
        >
          <Text style={{ color: preview.rideItems ? "white" : "black" }}>
            Rides
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setPreview((prev) => ({
              ...prev,
              deliveryItems: true,
              rideItems: false,
            }))
          }
          style={{
            ...styles.deliveryBtn,
            backgroundColor: preview.deliveryItems ? "#4460EF" : "#EEEEEE",
          }}
        >
          <Text style={{ color: preview.deliveryItems ? "white" : "black" }}>
            Deliveries
          </Text>
        </TouchableOpacity>
      </View>
      {preview.rideItems && <RideItems />}
      {preview.deliveryItems && <DeliveryItems />}
    </View>
  );
};

export default RideRatingScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: wp(13),
    marginHorizontal: wp(3),
  },
  helpIcon: {
    height: wp(10),
    width: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(10),
  },
  rideBtn: {
    width: wp(20),
    height: hp(5),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
  },
  deliveryBtn: {
    width: wp(28),
    height: hp(5),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
  },
  satisfactoryBar: {
    width: wp(77),
    height: wp(2),
    backgroundColor: "#4460EF",
    borderRadius: wp(10),
    marginHorizontal: wp(2),
  },
});
