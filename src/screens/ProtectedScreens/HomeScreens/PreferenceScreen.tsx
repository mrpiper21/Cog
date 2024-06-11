import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PreferenceItem from "../../../component/Prefernce/PreferenceItem";
import { PreferenceContext } from "../../../hooks/PrefrenceContext/PreferenceContext";
import { usePreferenceContext } from "../../../Context";

interface Preference {
  title: string;
  checked: boolean;
}

const PreferenceScreen = () => {
  const pr = usePreferenceContext();

  const toggleCheck = (index?: number) => {
    pr?.setPreferences((PrevState) =>
      PrevState.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSaveChanges = () => {};

  const handleReset = () => {
    pr?.setPreferences((prevState) =>
      prevState.map((item, i) => {
        if (item.checked === true) {
          item.checked = false;
        }
        return item;
      })
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: wp(3) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   paddingHorizontal: wp(1),
          marginTop: wp(12),
        }}
      >
        <BackButton />
        <Text
          style={{ fontSize: wp(5), fontWeight: "600", marginLeft: wp(23) }}
        >
          Preferences
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: wp(5), fontWeight: "600", marginTop: wp(3) }}>
          Services
        </Text>
        <View style={{ gap: wp(4), marginTop: wp(3) }}>
          {pr?.preferences.map((item, index) => (
            <PreferenceItem
              key={index}
              title={item.title}
              isChecked={item.checked}
              index={index}
              toggleCheck={() => toggleCheck(index)}
              icon={
                item.title === "GlopilotX" ||
                item.title === "Car hourly" ||
                item.title === "Rides" ? (
                  <MaterialIcons
                    style={{ marginRight: 10 }}
                    name="person"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    style={{ marginRight: wp(4) }}
                    name="package-variant"
                    size={wp(8)}
                    color="black"
                  />
                )
              }
            />
          ))}
        </View>
      </View>
      <View
        style={{
          marginTop: hp(15),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.saveChangesBtn}>
          <Text style={{ color: "white" }}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleReset()} style={styles.resetBtn}>
          <Text style={{ color: "black" }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferenceScreen;
const styles = StyleSheet.create({
  saveChangesBtn: {
    width: wp(90),
    height: hp(7.3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4460EF",
    borderRadius: wp(2),
  },
  resetBtn: {
    width: wp(90),
    height: hp(7.3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderRadius: wp(2),
    marginTop: wp(3),
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    height: wp(6),
    width: wp(6),
    borderRadius: 5,
  },
});
