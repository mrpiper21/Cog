import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import AuthItem from "../../component/Verification/AuthItem";
import BackButton from "../../widget/Buttons/BackButton";
import { useVerificationContext } from "../../Context";

const VerificationScreen = () => {
  const [verificationState, setVerifictionState] = useState({});
  const { isVerified } = useVerificationContext();

  isVerified && console.log(isVerified);
  return (
    <View style={{ flex: 1, padding: wp(3) }}>
      {/**Back arrow */}
      <View style={{ marginTop: wp(12) }}>
        <BackButton />
      </View>

      {/**Welcome text and info */}
      <View style={{ marginBottom: hp(3), marginTop: hp(3) }}>
        <Text style={{ fontSize: wp(4), fontWeight: "700" }}>
          Welcome, Femi Vanzekin
        </Text>
        <Text>
          Please provide the required documents to set up your account
        </Text>
      </View>

      {/**Items */}
      <AuthItem
        title={"CNIC Front Side"}
        route={"front-side"}
        isVerified={isVerified.CNIC_FRONT}
      />
      <AuthItem
        title={"CNIC Back Side"}
        route={"back-side"}
        isVerified={isVerified.CNIC_BACK}
      />
      <AuthItem
        title={"Profile Photo"}
        route={"Profile-photo"}
        isVerified={isVerified.Profile_Photo}
      />
      <AuthItem
        title={"Driving License"}
        route={"License-front"}
        isVerified={isVerified.Driving_License}
      />
      <AuthItem
        title={"Velicle Registeration"}
        route={"vehicle-reg"}
        isVerified={isVerified.Velicle_Registeration}
      />
    </View>
  );
};

export default VerificationScreen;
