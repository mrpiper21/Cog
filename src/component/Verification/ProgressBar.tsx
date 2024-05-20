import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProgressBar = () => {
  return (
    <View
      className="bg-blue-500"
      style={{
        width: wp(90),
        height: wp(2),
        borderRadius: wp(2),
        marginVertical: wp(4),
      }}
    />
  );
};

export default ProgressBar;
