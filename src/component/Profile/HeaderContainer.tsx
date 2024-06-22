import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../hooks/Usercontext/UserContext";

const HeaderContainer = () => {
  const navigation = useNavigation() as any;
  const User = useContext(useUserContext);
  console.log("My details.....", User);
  return (
    <View style={styles.headerContainer}>
      <View
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        {/* <Image
          style={styles.userImage}
          source={{
            uri: `${baseURL}${User?.user.email}`,
          }}
        /> */}
        <EvilIcons name="user" size={80} color="black" />
        <View>
          <Text style={{ fontWeight: "500", fontSize: wp(4) }}>
            {User?.user.email}
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
    marginTop: wp(2),
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
    justifyContent: "flex-end",
  },
});
