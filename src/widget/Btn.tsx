import { TouchableOpacity, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface ButtonProps {
  label: String;
  route?: String;
}

const Btn: React.FC<ButtonProps> = ({ route, label }) => {
  const navigation = useNavigation() as any;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={{
        width: wp(90),
        height: hp(7.3),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: wp(2),
        backgroundColor: "#4460EF",
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
