import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useVerificationContext } from "../../Context";

const ProgressBar = () => {
  const Verification = useVerificationContext();
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
          width: wp(
            Verification.isVerified.Profile_Photo === "Submitted" ||
              Verification.isVerified.Driving_License === "Submitted" ||
              Verification.isVerified.Velicle_Registeration === "Submitted" ||
              Verification.isVerified.CNIC_BACK === "Submitted" ||
              Verification.isVerified.CNIC_FRONT === "Submitted"
              ? 18
              : 0
          ),
          height: wp(2),
          borderRadius: wp(2),
        }}
      />
    </View>
  );
};

export default ProgressBar;
