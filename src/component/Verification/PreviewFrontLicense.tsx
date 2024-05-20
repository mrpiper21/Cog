import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../widget/BackButton";

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
  function handleSubmit() {
    setPhoto(undefined);
    navigation.navigate("Account-ready");
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
        <TouchableOpacity
          className="bg-blue-500"
          style={{
            width: wp(90),
            height: hp(7.3),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: wp(2),
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
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

export default PreviewFrontLicense;
