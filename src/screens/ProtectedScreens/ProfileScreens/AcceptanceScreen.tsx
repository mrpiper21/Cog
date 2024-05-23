import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import BackButton from "../../../widget/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const AcceptanceScreen = () => {
  return (
    <View>
      <View style={{ paddingHorizontal: wp(3), backgroundColor: "white" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: wp(12),
          }}
        >
          <BackButton />
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: "600",
              marginLeft: wp(25),
            }}
          >
            Acceptance Rate
          </Text>
        </View>
        <View style={{ padding: wp(3), marginTop: wp(4) }}>
          <Text style={{ fontSize: wp(4), fontWeight: "600" }}>
            Accptance Rate
          </Text>
          <View
            className="space-y-2"
            style={{ alignItems: "center", marginVertical: wp(4) }}
          >
            <Text style={{ fontWeight: "600", fontSize: wp(7) }}>87%</Text>
            <Text>18% Mar 06 - Apr 06</Text>
          </View>
        </View>
      </View>
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
      <View
        style={{ padding: wp(3), marginTop: wp(2), backgroundColor: "white" }}
      >
        <Text style={{ fontSize: wp(4), fontWeight: "600" }}>
          More information
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ marginRight: wp(2) }}
              name="calculator"
              size={wp(6)}
              color="black"
            />
            <Text
              style={{ marginTop: wp(3), fontSize: wp(3.5), fontWeight: "600" }}
            >
              How acceptance rate is calculated?
            </Text>
          </View>
          <Ionicons name="chevron-up" size={24} color="black" />
        </View>
        <View style={{ marginVertical: wp(3) }}>
          <Text style={{ fontSize: wp(3.4) }}>
            Your acceptance rate is the percentage of trips you accepted over
            the last 30 days. Glopilots Promos trips are excluded from your
            overall acceptance rate.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: wp(3),
            paddingVertical: wp(3),
            borderTopWidth: 1,
            borderColor: "#F5F5F5",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="black"
              style={{ marginRight: wp(2) }}
            />
            <Text style={{ fontWeight: "500", fontSize: wp(3.6) }}>
              Why acceptance rate matters?
            </Text>
          </View>
          <Feather name="chevron-down" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default AcceptanceScreen;

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
