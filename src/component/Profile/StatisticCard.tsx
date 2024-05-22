import { View, Text, TouchableOpacity } from "react-native";
import React, { SetStateAction } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Feather } from "@expo/vector-icons";
import ProfilePreviewItem from "./ProfilePreviewItem";

interface StatsProps {
  preview: Boolean;
  label: String;
  percentageScore: String;
  setPreview: React.Dispatch<SetStateAction<boolean>>;
}

const StatisticCard: React.FC<StatsProps> = ({
  preview,
  setPreview,
  label,
  percentageScore,
}) => {
  return (
    <View
      style={{
        padding: wp(3),
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "lightgray",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: wp(3),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign
            style={{ marginRight: wp(3) }}
            name="checkcircle"
            size={24}
            color="green"
          />
          <TouchableOpacity onPress={() => setPreview(!preview)}>
            <Text style={{ fontSize: wp(3.5), fontWeight: "500" }}>
              {label}
            </Text>
            {preview ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={24} color="orange" />
                <Text>4.6</Text>
              </View>
            ) : (
              <Text>{percentageScore}%</Text>
            )}
          </TouchableOpacity>
        </View>
        {preview ? (
          <TouchableOpacity onPress={() => setPreview(!preview)}>
            <Feather name="chevron-up" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setPreview(!preview)}>
            <Feather name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <ProfilePreviewItem preview={preview} />
    </View>
  );
};

export default StatisticCard;
