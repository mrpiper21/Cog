import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import AuthItem from "../../component/Verification/AuthItem";
import BackButton from "../../widget/Buttons/BackButton";
import { useInitialStore } from "../../Context/Upload";

const VerificationScreen = () => {
  const completed = useInitialStore((state) => state.DriverLicense);
  completed && console.log(completed);
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
        completed={completed}
      />
      <AuthItem
        title={"CNIC Back Side"}
        route={"back-side"}
        completed={completed}
      />
      <AuthItem
        title={"Profile Photo"}
        route={"Profile-photo"}
        completed={completed}
      />
      <AuthItem
        title={"Driving License"}
        route={"license-auth"}
        completed={completed}
      />
      <AuthItem
        title={"Velicle Registeration"}
        route={"vehicle-reg"}
        completed={completed}
      />
    </View>
  );
};

export default VerificationScreen;
