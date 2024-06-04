import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  AntDesign,
  SimpleLineIcons,
  Foundation,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import ReviewCard from "../../../component/Profile/ReviewCard";
import { useNavigation } from "@react-navigation/native";
import { UserInfoContext } from "../../../Context";

const ProfileDetailScreen = () => {
  const navigation = useNavigation() as any;
  const { user } = UserInfoContext();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white", marginBottom: wp(5) }}
    >
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={{ fontSize: wp(5), fontWeight: "500" }}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.editButton}
        >
          <Entypo name="edit" size={24} color="black" />
        </TouchableOpacity>
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
            {user?.email}
          </Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RatingDetail")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="star" size={24} color="orange" />
            <Text style={{ fontWeight: "600" }}>4.6</Text>
          </View>
          <Text>Ratings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Acceptance")}
          style={{ alignItems: "center" }}
        >
          <Text style={{ fontWeight: "600" }}>87%</Text>
          <Text>Acceptance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cancellation")}
          style={{ alignItems: "center" }}
        >
          <Text style={{ fontWeight: "600" }}>2%</Text>
          <Text>Cancellation</Text>
        </TouchableOpacity>
      </View>
      <View
        className="space-y-3"
        style={{
          padding: wp(3),
          borderBottomWidth: 1,
          borderColor: "lightgray",
          marginTop: wp(4),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons
            style={{ marginRight: wp(3) }}
            name="globe"
            size={24}
            color="black"
          />
          <Text>Knows English and Spanish</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Foundation
            style={{ marginRight: wp(3) }}
            name="home"
            size={24}
            color="black"
          />
          <Text>From California, USA</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign
            style={{ marginRight: wp(3) }}
            name="clockcircle"
            size={24}
            color="black"
          />
          <Text>450 trips over 4 years</Text>
        </View>
      </View>
      <View style={{ marginTop: wp(4) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: wp(4),
          }}
        >
          <Text style={{ fontSize: wp(4), fontWeight: "500" }}>
            GloPilots Badges
          </Text>
          <Text className="text-blue-700">View all</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: wp(6),
            marginHorizontal: wp(4),
            marginTop: wp(7),
          }}
        >
          <View>
            <Image source={require("../../../../assets/anniversary.png")} />
            <Text style={{ marginTop: wp(2) }}>Anniversary</Text>
          </View>
          <View>
            <Image source={require("../../../../assets/anniversary.png")} />
            <Text style={{ marginTop: wp(2) }}>Top Tipper</Text>
          </View>
          <View>
            <Image source={require("../../../../assets/anniversary.png")} />
            <Text style={{ marginTop: wp(2) }}>Marathoner</Text>
          </View>
          <View>
            <Image source={require("../../../../assets/anniversary.png")} />
            <Text style={{ marginTop: wp(2) }}>Five-Star Rider</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: wp(4), fontWeight: "600" }}>Reviews</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: wp(5), marginTop: wp(4) }}
          className="space-x-3"
        >
          <View>
            <ReviewCard label={'"Keep it up!"'} lastReviewed={"2"} />
          </View>
          <View>
            <ReviewCard label={"“Very Patient Driver”"} lastReviewed={"7"} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProfileDetailScreen;

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
