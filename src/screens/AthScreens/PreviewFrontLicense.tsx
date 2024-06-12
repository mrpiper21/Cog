import { View, Text, Image, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../widget/Buttons/BackButton";
import Btn from "../../widget/Btn";
import { useVerificationContext } from "../../Context";
import LottieView from "lottie-react-native";

interface PreviewProps {
  photo: any;
  setPhoto: (value: any) => void;
  hasMediaLibraryPermission: any;
}

const PreviewFrontLicense: React.FC<PreviewProps> = ({
  photo,
  setPhoto,
  hasMediaLibraryPermission,
}) => {
  const { uploadLicense, handleLicenseSubmit } = useVerificationContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation() as any;
  let sharePhoto = () => {
    shareAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  let savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  if (isLoading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <LottieView
          style={{
            width: 300,
            height: 300,
          }}
          source={require("../../../assets/loaders/loader2.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <BackButton />
      <View style={{ alignItems: "center", marginTop: wp(20) }}>
        <Image
          style={{ height: wp(50), width: wp(90) }}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
      </View>
      {hasMediaLibraryPermission ? (
        <Button title="Save" onPress={savePhoto} />
      ) : undefined}
      {/* <Button title="Discard" onPress={() => setPhoto(undefined)} /> */}

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: wp(4), fontWeight: "500", marginTop: wp(5) }}>
          Do you want to use this photo?
        </Text>
        <Text
          style={{
            width: wp(80),
            marginTop: wp(5),
            fontSize: wp(3.5),
          }}
        >
          Make sure your Driving License (Front Side) is readable.
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: wp(42) }}>
        <View className="mb-2">
          <Btn
            type="action"
            label={"Submit"}
            callback={() => handleLicenseSubmit(setIsLoading, setPhoto, photo)}
          />
        </View>
        <Btn
          type="cancel"
          label={"Retake"}
          callback={() => setPhoto(undefined)}
        />
      </View>
    </View>
  );
};

export default PreviewFrontLicense;

const styles = StyleSheet.create({});
