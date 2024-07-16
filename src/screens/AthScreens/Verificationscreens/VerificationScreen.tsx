import { View, Text, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useContext, useState } from "react";
import SatusItem from "../../../component/Verification/SatusItem";
import BackButton from "../../../widget/Buttons/BackButton";
import Btn from "../../../widget/Btn";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../../../component/Verification/ProgressBar";
import { useUserContext } from "../../../hooks/Usercontext/UserContext";

const VerificationScreen = () => {
  const User = useContext(useUserContext)
  const navigation = useNavigation() as any;
  // User.
  // isVerified && console.log(Verification?.isVerified.);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, padding: wp(3), backgroundColor: 'white' }}
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
      <SatusItem
        title={"CNIC Front Side"}
        route={"front-side"}
        status={User?.user.cnicFrontStatus}
      />
      <SatusItem
        title={"CNIC Back Side"}
        route={"back-side"}
        status={User?.user.cnicBackStatus}
      />
      <SatusItem
        title={"Profile Photo"}
        route={"Profile-photo"}
        profilePic={User?.user.profilePic}
      />
      <SatusItem
        title={"Driving License"}
        route={"License-front"}
        status={User?.user.driversLicenseStatus}
      />
      <SatusItem
        title={"Velicle Registeration"}
        route={"vehicle-reg"}
        status={User?.user.vehicleRegistrationStatus}
      />

      {User?.user.profilePic &&
        User.user.driversLicenseStatus === "Submitted" && (
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
