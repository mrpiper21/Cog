import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Foundation,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import RateHeaderView from "../../../component/Profile/RateHeaderView";
import TripInformation from "../../../component/Profile/TripInformation";
import MoreIformationItem from "../../../component/Profile/MoreIformationItem";

const CancellationScreen = () => {
  return (
    <View>
      <RateHeaderView
        Title={"Cancellation Rate"}
        lable={"Cancellation Rate"}
        Rate={2}
        category="Cancellation"
        date={" March 02 3023"}
      />
      <TripInformation />
      {/**more information View */}
      <MoreIformationItem />
    </View>
  );
};

export default CancellationScreen;

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
