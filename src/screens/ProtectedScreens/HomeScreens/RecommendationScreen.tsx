import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../../../widget/BackButton";
import BarData from "../../../widget/BarData";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BarChart } from "react-native-gifted-charts";

const RecommendationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.recommendedContainer}>
        <View
          style={{
            marginTop: wp(13),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BackButton />
          <Text
            style={{ fontWeight: "600", fontSize: wp(4.5), marginLeft: wp(16) }}
          >
            Recommended for you
          </Text>
        </View>
        <View>
          <Text
            style={{ fontSize: wp(5), fontWeight: "500", marginTop: hp(2) }}
          >
            Upcoming Opportunities
          </Text>
          <Text
            style={{ fontSize: wp(4), fontWeight: "500", marginTop: hp(1.5) }}
          >
            1.5x Boost per trip
          </Text>
          <View className="space-y-2">
            <Text>Boost trips</Text>
            <Text>06:00 PM - 10:00 PM</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text>See all opportunities</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: wp(2),
          padding: wp(3),
        }}
      >
        <Text style={{ fontSize: wp(5), fontWeight: "500" }}>Earnings</Text>
        <Text style={{ fontSize: wp(4) }}>
          Today’s forecast is based on 4 weeks of data; actual earning may vary.
        </Text>
        <View>
          <BarChart
            barWidth={wp(8)}
            noOfSections={3}
            barBorderRadius={4}
            frontColor="lightgray"
            data={BarData}
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>
      </View>
    </View>
  );
};

export default RecommendationScreen;

const styles = StyleSheet.create({
  recommendedContainer: {
    paddingHorizontal: wp(3),
    backgroundColor: "white",
    paddingBottom: hp(2),
  },
  seeAllBtn: {
    backgroundColor: "#EEEEEE",
    width: wp(37),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(2),
    height: hp(5),
  },
});
