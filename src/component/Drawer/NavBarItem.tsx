import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  icon: React.ReactNode;
  label: String;
  msg?: Number;
}

const NavBarItem: React.FC<Props> = ({ icon, label, msg }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: wp(5),
        borderBottomWidth: 2,
        borderColor: "lightgray",
      }}
    >
      {icon}
      <Text style={{ marginLeft: wp(3) }}>{label}</Text>
      {msg && (
        <View
          style={{
            height: wp(5),
            width: wp(5),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: wp(7),
            backgroundColor: "#4460EF",
            marginLeft: wp(3),
          }}
        >
          <Text style={{ color: "white" }}>3</Text>
        </View>
      )}
    </View>
  );
};

export default NavBarItem;
