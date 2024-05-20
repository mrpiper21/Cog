import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import AuthItem from "../../component/Verification/AuthItem";
import BackButton from "../../widget/BackButton";

const VerificationScreen = () => {
  return (
    <View style={{ flex: 1, padding: wp(3) }}>
      {/**Back arrow */}
      <BackButton />

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
      <AuthItem title={"CNIC Front Side"} route={"front-side"} />
      <AuthItem title={"CNIC Back Side"} route={"back-side"} />
      <AuthItem title={"Profile Photo"} route={"Profile-photo"} />
      <AuthItem title={"Driving License"} route={"license-auth"} />
      <AuthItem title={"Velicle Registeration"} route={"vehicle-reg"} />
    </View>
  );
};

export default VerificationScreen;
