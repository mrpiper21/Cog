import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface PerfrenceProps {
  title: String;
  icon: React.ReactNode;
  isChecked: boolean;
  index: number;
  toggleCheck: (index: number) => void;
}

const PreferenceItem: React.FC<PerfrenceProps> = ({
  title,
  icon,
  isChecked,
  toggleCheck,
  index,
}) => {
  const handleValueChange = (value: boolean) => {
    toggleCheck(index);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon}
        <Text>{title}</Text>
      </View>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={handleValueChange}
        color={isChecked ? "#4630EB" : undefined}
      />
    </View>
  );
};

export default PreferenceItem;
const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
    height: wp(6),
    width: wp(6),
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgray",
    height: hp(10),
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
  },
});
