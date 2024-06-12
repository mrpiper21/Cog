import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useVerificationContext } from "../../Context";

const ProgressBar = () => {
  const Verification = useVerificationContext();
  const totalProperties = Object.keys(Verification.isVerified).length;
  const submittedProperties = Object.values(Verification.isVerified).filter(
    (value) => value === "Submitted"
  ).length;
  const progress = (submittedProperties / totalProperties) * 100;

  return (
    <View
      style={{
        width: wp(92),
        height: wp(3),
        backgroundColor: "#EEEEEE",
        alignItems: "flex-start",
        marginVertical: wp(4),
      }}
    >
      <View
        className="bg-blue-500"
        style={{
          width: `${progress}%`,
          height: wp(2),
          borderRadius: wp(2),
        }}
      />
    </View>
  );
};

export default ProgressBar;
