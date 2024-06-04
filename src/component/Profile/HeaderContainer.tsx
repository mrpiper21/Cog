import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserInfoContext } from "../../Context";

const HeaderContainer = () => {
  const navigation = useNavigation() as any;
  const { user } = UserInfoContext();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userContainer}>
        <Text style={{ fontSize: wp(5), fontWeight: "600" }}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="closecircleo" size={hp(4)} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: wp(4) }}>
        <Image
          style={styles.userImage}
          source={{
            uri: "https://th.bing.com/th/id/R.049f9f762cce429ac653cb14beb6d6cd?rik=xYCBCJErYOUW7A&pid=ImgRaw&r=0",
          }}
        />
        <View>
          <Text style={{ fontWeight: "500", fontSize: wp(4) }}>
            {user.name ? user.name : "User"}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileDetail")}
            style={styles.viewBtn}
          >
            <Text>view profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  userImage: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(15),
    marginRight: wp(2),
  },
  viewBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp(1),
    backgroundColor: "#EEEEEE",
    height: wp(8),
    width: wp(20),
    borderRadius: wp(2),
  },
  userContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    backgroundColor: "white",
    padding: wp(3),
    height: hp(21),
    justifyContent: "flex-end",
  },
});
