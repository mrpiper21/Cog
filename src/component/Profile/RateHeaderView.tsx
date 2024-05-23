import { View, Text } from "react-native";
import React from "react";
import BackButton from "../../widget/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface RateHeaderProps {
  Title: String;
  lable: String;
  Rate: number;
  date: String;
  category: "Acceptance" | "Cancellation";
}

const RateHeaderView: React.FC<RateHeaderProps> = ({
  Title,
  lable,
  Rate,
  date,
  category,
}) => {
  return (
    <View style={{ paddingHorizontal: wp(3), backgroundColor: "white" }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginTop: wp(12),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: wp(4),
            fontWeight: "600",
            marginLeft: wp(25),
          }}
        >
          {Title}
        </Text>
      </View>
      <View style={{ padding: wp(3), marginTop: wp(4) }}>
        <Text style={{ fontSize: wp(4), fontWeight: "600" }}>{lable}</Text>
        <View
          className="space-y-2"
          style={{ alignItems: "center", marginVertical: wp(4) }}
        >
          <Text style={{ fontWeight: "600", fontSize: wp(7) }}>{Rate} %</Text>
          {category === "Acceptance" ? (
            <Text>{date}</Text>
          ) : (
            <Text>
              <Text style={{ color: "red" }}>2%</Text>Mar 06 - Apr 06
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default RateHeaderView;
