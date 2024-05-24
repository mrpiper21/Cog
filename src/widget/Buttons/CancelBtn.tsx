import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CancelBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="p-3 border-2 border-[#EEEEEE] rounded-full"
    >
      <Ionicons name="close-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default CancelBtn;
