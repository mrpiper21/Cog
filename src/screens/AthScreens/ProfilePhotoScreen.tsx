import { View, Text, Image } from "react-native";
import React from "react";
import BackButton from "../../widget/Buttons/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Btn from "../../widget/Btn";
import ProgressBar from "../../component/Verification/ProgressBar";
import { useNavigation } from "@react-navigation/native";

const ProfilePhotoScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View style={{ flex: 1, paddingHorizontal: wp(3) }}>
      <View style={{ marginTop: wp(12) }}>
        <BackButton />
      </View>
      {/**tracking bar */}
      <ProgressBar />
      <View>
        <Text style={{ fontSize: wp(4), fontWeight: "800" }}>
          Take a Profile Photo
        </Text>
        <Text style={{ fontSize: hp(1.8), marginTop: wp(4) }}>
          Your profile photo is permanent and helps others recognize you, so
          choose it wisely.
        </Text>
        <View
          style={{
            width: wp(88),
            height: "auto",
            marginLeft: wp(3),
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp(1.8), marginTop: wp(3.5) }}>
            1. Face the camera directly to show your eyes and mouth clearly.
          </Text>
          <Text style={{ fontSize: hp(1.8), marginTop: wp(3.5) }}>
            2. Make sute the lighting is good, there's no glare, and the photo
            is sharp.
          </Text>
          <Text style={{ fontSize: hp(1.8), marginTop: wp(3.5) }}>
            3. Use original photos without filters, alterations, or photos of
            photos.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: wp(4) }}>
        <Image
          style={{ width: wp(77), height: hp(40) }}
          source={require("../../../assets/portrait-man-laughing1.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: wp(7) }}>
        <Btn
          type="action"
          label={"Take Photo"}
          callback={() => navigation.navigate("Upload-profile-photo")}
        />
      </View>
    </View>
  );
};

export default ProfilePhotoScreen;
