import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import PreviewFrontLicense from "../../component/Verification/PreviewFrontLicense";

const UploadFrontLicense = () => {
  const [facing, setFacing] = useState("back");
  const [photo, setPhoto] = useState() as any;
  const [permission, requestPermission] = useCameraPermissions();
  const [hasCameraaPermission, setHasCameraPermission] = useState(Boolean);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(Boolean);

  const cameraRef = useRef<CameraView>(null);
  const navigation = useNavigation();

  useEffect(() => {
    async () => {
      const cameraPermession = await Camera.requestCameraPermissionsAsync();
      const medialibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermession.status === "granted");
      setHasMediaLibraryPermission(medialibraryPermission.status === "granted");
    };
  }, []);

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePic = async () => {
    //   setIsLoading(true);
    let options = {
      quality: 1,
      base64: true,
      exit: false,
    };
    let newPhoto = await cameraRef.current?.takePictureAsync(options);
    if (newPhoto) {
      // setIsLoading(false);
    }
    setPhoto(newPhoto);
  };

  if (photo) {
    return (
      <PreviewFrontLicense
        photo={photo}
        setPhoto={setPhoto}
        hasMediaLibraryPermission={hasMediaLibraryPermission}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{ margin: wp(4) }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="close"
            size={wp(6)}
            color="black"
            style={{ marginTop: wp(5) }}
          />
        </TouchableOpacity>
        <View className="items-center mt-10">
          <View className="overflow-hidden h-[270px] w-[450px]">
            <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
              {/* {loading && <ActivityIndicator />} */}
              <View style={styles.buttonContainer}></View>
            </CameraView>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: wp(2),
        }}
      >
        <TouchableOpacity
          className="items-center justify-center border-2 border-[#4460EF] rounded-full m-2 h-[85px] w-[85px]"
          onPress={takePic}
        >
          <View className="h-[75px] w-[75px] bg-[#4460EF] rounded-full" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleCameraFacing}
          style={{ marginLeft: wp(22), marginRight: wp(8) }}
        >
          <Ionicons name="camera-reverse-sharp" size={wp(12)} color="#4460EF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadFrontLicense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
