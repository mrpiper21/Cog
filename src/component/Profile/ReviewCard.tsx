import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ReviewProps {
  label: String;
  lastReviewed: String;
}

const ReviewCard: React.FC<ReviewProps> = ({ label, lastReviewed }) => {
  return (
    <View
      style={{
        padding: wp(3),
        height: hp(17),
        width: wp(75),
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: wp(2),
        justifyContent: "space-between",
      }}
    >
      <View>
        <View>
          <Text>{label}"</Text>
          <View className="space-x-1" style={{ flexDirection: "row" }}>
            <AntDesign name="star" size={24} color="orange" />
            <AntDesign name="star" size={24} color="orange" />
            <AntDesign name="star" size={24} color="orange" />
            <AntDesign name="star" size={24} color="orange" />
            <AntDesign name="star" size={24} color="orange" />
          </View>
        </View>
      </View>
      <Text style={{ fontStyle: "italic" }}> {lastReviewed} months ago</Text>
    </View>
  );
};

export default ReviewCard;
