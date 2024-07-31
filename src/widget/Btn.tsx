import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface ButtonProps {
  label?: String;
  route?: String;
  type?: "action" | "cancel";
  callback?: (value?: any) => void;
  loader?: React.ReactNode
}

const Btn: React.FC<ButtonProps> = ({ route, label, type, callback, loader }) => {
  const navigation = useNavigation() as any;
  // const handleCallback = () => {
  //   route && navigation.navigate(route);
  //   callback && callback();
  // };
  return (
    <TouchableOpacity
      disabled={loader && type == "cancel" ? true : false}
      onPress={() => callback && callback()}
      style={ type === "action" ? [styles.button, { backgroundColor: "#4460EF" }] : [styles.button, { backgroundColor: "#EEEE" }]}
    >
      {label ? 
      <Text style={type === "action" && [styles.labeltxt, { color: "white" }]}>
          {label}
        </Text> : loader}
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    width: wp(90),
    height: hp(7.3),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(2),
    backgroundColor: "#EEEE", /*"#4460EF"*/
  },
  labeltxt: {
    color: "black"
  }
})