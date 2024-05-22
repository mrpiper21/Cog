import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { ProfilerProps } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
interface PofileProps {
  route: String;
}

const ProfileItem: React.FC<PofileProps> = ({ route }) => {
  const navigation = useNavigation() as any;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Image
        style={{
          height: wp(12),
          width: wp(12),
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: wp(1),
          }}
        >
          <AntDesign name="star" size={wp(4)} color="orange" />
          <Text>4.6</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
