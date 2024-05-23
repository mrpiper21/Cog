import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderContainer = () => {
  const navigation = useNavigation() as any;
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: wp(3),
        height: hp(21),
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: wp(5), fontWeight: "600" }}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="closecircleo" size={hp(4)} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: wp(4) }}>
        <Image
          style={{
            height: wp(15),
            width: wp(15),
            borderRadius: wp(15),
            marginRight: wp(2),
          }}
          source={{
            uri: "https://th.bing.com/th/id/R.049f9f762cce429ac653cb14beb6d6cd?rik=xYCBCJErYOUW7A&pid=ImgRaw&r=0",
          }}
        />
        <View>
          <Text style={{ fontWeight: "500", fontSize: wp(4) }}>
            Femi Vanzekin
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileDetail")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: wp(1),
              backgroundColor: "#EEEEEE",
              height: hp(4),
              borderRadius: wp(2),
            }}
          >
            <Text>view profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderContainer;
