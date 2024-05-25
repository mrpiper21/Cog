import { View, Text } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BarData from "./BarData";

const BarChartItem = () => {
  return (
    <BarChart
      height={hp(20)}
      barWidth={wp(8)}
      noOfSections={3}
      barBorderRadius={4}
      frontColor="lightgray"
      data={BarData}
      yAxisThickness={0}
      xAxisThickness={0}
    />
  );
};

export default BarChartItem;
