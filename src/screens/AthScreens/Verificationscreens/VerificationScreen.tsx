import { View, Text, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useContext, useState } from "react";
import AuthItem from "../../../component/Verification/AuthItem";
import BackButton from "../../../widget/Buttons/BackButton";
import Btn from "../../../widget/Btn";
import { VerifyContext } from "../../../hooks/Verificationcontext/VerificationContext";
import { useNavigation } from "@react-navigation/native";
import { useVerificationContext } from "../../../Context";
import ProgressBar from "../../../component/Verification/ProgressBar";

const VerificationScreen = () => {
  const [verificationState, setVerifictionState] = useState({});
  const Verification = useVerificationContext();
  const navigation = useNavigation() as any;
  // User.

  console.log(
    "Verify the photo... verification screen",
    Verification.isVerified.Profile_Photo
  );
  // isVerified && console.log(Verification?.isVerified.);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, padding: wp(3) }}
    >
      {/**Back arrow */}
      <View style={{ marginTop: wp(12) }}>
        <BackButton />
      </View>

      <ProgressBar />

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
        isVerified={Verification?.isVerified.CNIC_FRONT}
      />
      <AuthItem
        title={"CNIC Back Side"}
        route={"back-side"}
        isVerified={Verification?.isVerified.CNIC_BACK}
      />
      <AuthItem
        title={"Profile Photo"}
        route={"Profile-photo"}
        isVerified={Verification?.isVerified.Profile_Photo}
      />
      <AuthItem
        title={"Driving License"}
        route={"License-front"}
        isVerified={Verification?.isVerified.Driving_License}
      />
      <AuthItem
        title={"Velicle Registeration"}
        route={"vehicle-reg"}
        isVerified={Verification?.isVerified.Velicle_Registeration}
      />

      {Verification?.isVerified.Profile_Photo === "Submitted" &&
        Verification.isVerified.Driving_License === "Submitted" && (
          <View
            style={{ marginTop: wp(10) }}
            className="flex-1 items-center justify-center"
          >
            <Btn
              type="action"
              label={"Continue later"}
              callback={() => navigation.navigate("Account-ready")}
            />
          </View>
        )}
    </ScrollView>
  );
};

export default VerificationScreen;
