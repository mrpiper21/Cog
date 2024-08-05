import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Btn from "../../../widget/Btn";
import { UserInfoContext } from "../../../Context";
import { useNavigation } from "@react-navigation/native";

const AccountReadyScreen = () => {
  const navigation = useNavigation() as any;
  const User = UserInfoContext();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: hp(25) }}>
        <Image source={require("../../../../assets/Group 489.png")} />
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ alignItems: "center" }}>
          <Text className="text-center" style={{ fontSize: wp(4), fontWeight: "600" }}>
            Hi {User?.user.email}, your account is almost ready
          </Text>
          <Text className="text-center" style={{ fontSize: wp(4) }}>
            Start connecting with passengers and enjoy driving.
          </Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: wp(3) }}>
          <Btn
            type="action"
            label={"let's go"}
            callback={()=> navigation.navigate("protected-route")}
          />
        </View>
      </View>
    </View>
  );
};

export default AccountReadyScreen;
