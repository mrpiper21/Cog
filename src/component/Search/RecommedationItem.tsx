import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  label: String;
  icon: React.ReactNode;
}

const RecommedationItem: React.FC<Props> = ({ label, icon }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          borderRadius: wp(2),
          alignItems: "center",
          justifyContent: "center",
          width: wp(25),
          height: hp(6),
          backgroundColor: "#EEEEEE",
        }}
      >
        {icon}
      </View>
      <Text>{label}</Text>
    </View>
  );
};

export default RecommedationItem;
