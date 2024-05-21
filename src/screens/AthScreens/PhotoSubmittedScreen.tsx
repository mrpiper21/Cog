import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import BackButton from "../../widget/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Btn from "../../widget/Btn";
import { useNavigation } from "@react-navigation/native";

const PhotoSubmittedScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: wp(3),
        justifyContent: "space-between",
      }}
    >
      <View style={{ marginTop: wp(12) }}>
        <BackButton />
      </View>
      <View style={{ alignItems: "center" }}>
        <AntDesign name="checkcircle" size={wp(20)} color="green" />
        <View style={{ alignItems: "center", marginTop: wp(4) }}>
          <Text style={{ fontSize: wp(4), fontWeight: "500" }}>
            Document under review
          </Text>
          <Text style={{ marginTop: wp(2) }}>
            It usually takes less than two days for us to
          </Text>
          <Text>complete the process.</Text>
        </View>
      </View>
      <View style={{ marginBottom: wp(4) }}>
        <Btn label={"Go to next step"} route={"License-front"} />
      </View>
    </View>
  );
};

export default PhotoSubmittedScreen;
