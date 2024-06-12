import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React from "react";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useVerificationContext } from "../../Context";
import Btn from "../../widget/Btn";
import LottieView from "lottie-react-native";

interface PreviewProps {
  photo: any;
  setPhoto: (value: any) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  hasMediaLibraryPermission: any;
}

const PreviewPhoto: React.FC<PreviewProps> = ({
  photo,
  setPhoto,
  hasMediaLibraryPermission,
  setIsLoading,
  isLoading,
}) => {
  const navigation = useNavigation() as any;
  const { handleProfilePhotoSubmit } = useVerificationContext();
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
          source={require("../../../assets/loaders/loader.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: wp(20) }}>
        <Image
          style={{ height: wp(80), width: wp(80), borderRadius: hp(70) }}
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
        <Text style={{ width: wp(80), marginTop: wp(5) }}>
          By submitting you agree that your photo may be collected and proceed
          by Glopilots or a trusted vendor to verify your identity using
          technology
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: wp(30) }}>
        <Btn
          type="action"
          callback={() =>
            handleProfilePhotoSubmit(setIsLoading, setPhoto, photo)
          }
          label={"Submit"}
        />
        <TouchableOpacity
          onPress={() => setPhoto(undefined)}
          className="bg-slate-300"
          style={{
            width: wp(90),
            height: hp(7.3),
            marginTop: wp(3),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: wp(2),
          }}
        >
          <Text>Retake</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreviewPhoto;
