import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { ProfilerProps, useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../hooks/UserContext";
import { baseURL } from "../../Services/authorization";
interface PofileProps {
  route: String;
}

const ProfileItem: React.FC<PofileProps> = ({ route }) => {
  const User = useContext(useUserContext);
  console.log("User In my Context: ", User);
  // console.log("my email", User?.user.user.email);

  console.log("Profile Pic", User?.user.user.profilePic);
  const navigation = useNavigation() as any;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Image
        style={styles.userImag}
        source={{
          uri: `${baseURL}${User?.user.user.profilePic}`,
        }}
      />
      <View>
        <Text className="text-base font-bold">{User?.user.user.email}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={wp(4)} color="orange" />
          <Text>4.6</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  userImag: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(15),
    marginRight: wp(2),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: wp(1),
  },
});
