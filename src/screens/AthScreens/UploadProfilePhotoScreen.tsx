import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PreviewPhoto from "../../component/Verification/PreviewPhoto";
import { useNavigation } from "@react-navigation/native";

const UploadProfilePhotoScreen = () => {
  const [loading, setIsLoading] = useState(false);
  const [facing, setFacing] = useState("front");
  const [photo, setPhoto] = useState() as any;
  const [image, setImage] = useState<string>();
  const [permission, requestPermission] = useCameraPermissions();
  const [hasCameraPermision, setHasCameraPermission] = useState(Boolean);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(Boolean);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  let cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    };
  }, []);
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePic = async () => {
    setIsLoading(true);
    let options = {
      quality: 1,
      base64: true,
      exit: false,
    };
    let newPhoto = await cameraRef?.current?.takePictureAsync(options);
    if (newPhoto) {
      setIsLoading(false);
    }
    setPhoto(newPhoto);
  };

  // const saveImage = async (image: any) => {
  //   try {
  //     setImage(image);
  //     console.log("image uri...", image);
  //     setModalVisible(false);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (photo) {
    return (
      <PreviewPhoto
        hasMediaLibraryPermission={hasMediaLibraryPermission}
        setPhoto={setPhoto}
        photo={photo}
        setIsLoading={setIsLoading}
        isLoading={loading}
      />
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View className="flex-1 items-center mt-20">
        <View
          style={{ width: wp(95), height: wp(100) }}
          className="overflow-hidden rounded-full"
        >
          <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="close"
                size={wp(6)}
                color="white"
                style={{ marginTop: wp(5) }}
              />
            </TouchableOpacity>
            {/* {loading && <ActivityIndicator />} */}
            <View style={styles.buttonContainer}></View>
          </CameraView>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{ width: wp(20), height: wp(20) }}
          className="items-center justify-center border-2 border-[#4460EF] rounded-full m-2 mb-4"
          onPress={takePic}
        >
          <View
            style={{ width: wp(17), height: wp(17) }}
            className=" bg-[#4460EF] rounded-full"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleCameraFacing()}
          style={{ marginLeft: wp(22), marginRight: wp(8) }}
        >
          <Ionicons name="camera-reverse-sharp" size={wp(10)} color="#4460EF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadProfilePhotoScreen;

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