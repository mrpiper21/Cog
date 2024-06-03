import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../widget/Buttons/BackButton";
import axios from "axios";
import { baseURL, config } from "../../Services/authorization";
import Btn from "../../widget/Btn";
import { useStore } from "zustand";
import { useInitialStore } from "../../Context/Upload";
import {
  Context,
  useInitialContext,
  useVerificationContext,
} from "../../Context";

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
  const { uploadPhoto } = useVerificationContext();
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

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("driversLicense", {
      uri: photo.uri,
      name: "driversLicense.jpg",
      type: "image/jpeg",
    });

    formData.append("Content-Type", "image/jpeg");
    console.log(formData);
    try {
      const res = await axios.post(
        baseURL + "user/upload/drivers-license",
        formData,
        config
      );

      // console.log(res.headers);
      // if (res.status === 201) {
      //
      // }
      uploadPhoto();
      setIsLoading(false);
      setPhoto(undefined);
      navigation.navigate("Account-ready");
    } catch (error) {
      console.error("Error uploading image:", error);
      setPhoto(undefined);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text>Please wait...</Text>
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
          <Btn type="action" label={"Submit"} callback={handleSubmit} />
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
