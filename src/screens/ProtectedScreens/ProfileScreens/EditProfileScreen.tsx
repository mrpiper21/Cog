import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import BackButton from "../../../widget/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import EditBtn from "../../../component/Profile/EditBtn";

const EditProfileScreen = () => {
  return (
    <View>
      <View
        style={{
          marginTop: wp(12),
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: wp(3),
        }}
      >
        <BackButton />
        <Text
          style={{ fontWeight: "600", fontSize: wp(4), marginLeft: wp(28) }}
        >
          Edit Profile
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: wp(8) }}>
        <View>
          <Image
            style={styles.ImageItem}
            source={{
              uri: "https://th.bing.com/th/id/R.049f9f762cce429ac653cb14beb6d6cd?rik=xYCBCJErYOUW7A&pid=ImgRaw&r=0",
            }}
          />
          <View style={styles.cameraIcon}>
            <AntDesign name="camera" size={24} color="black" />
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: wp(2) }}>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>
            Femi Vanzekin
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: wp(4),
          marginTop: wp(5),
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "lightgray",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={{ marginRight: wp(3) }}
            name="globe-outline"
            size={wp(7)}
            color="black"
          />
          <View>
            <Text>Add languages you know</Text>
            <Text style={{ fontSize: wp(3.5), fontWeight: "500" }}>
              Knows English and Spanish
            </Text>
          </View>
        </View>
        <EditBtn />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: wp(4),
          borderBottomWidth: 1,
          borderColor: "lightgray",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="home-variant"
            size={wp(7)}
            color="black"
            style={{ marginRight: wp(3) }}
          />
          <View>
            <Text>Where you’re from</Text>
            <Text style={{ fontSize: wp(3.5), fontWeight: "500" }}>
              From California, USA
            </Text>
          </View>
        </View>
        <EditBtn />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: wp(10),
    marginHorizontal: wp(3),
  },
  editButton: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageItem: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(15),
  },
  cameraIcon: {
    height: wp(9),
    width: wp(9),
    borderRadius: wp(10),
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: wp(4),
    paddingVertical: wp(3),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F5F5F5",
  },
});
