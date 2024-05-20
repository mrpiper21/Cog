import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import BackButton from "../../widget/BackButton";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
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
  const [permission, requestPermission] = useCameraPermissions();
  const [hasCameraPermision, setHasCameraPermission] = useState(Boolean);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(Boolean);
  const navigation = useNavigation();
  let cameraRef = useRef();

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
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    if (newPhoto) {
      setIsLoading(false);
    }
    setPhoto(newPhoto);
  };

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
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="close"
            size={wp(8)}
            color="white"
            style={{ marginTop: wp(5) }}
          />
        </TouchableOpacity>
        {/* {loading && <ActivityIndicator />} */}
        <View style={styles.buttonContainer}></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={takePic}>
            <MaterialIcons name="camera" size={wp(17)} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleCameraFacing}
            style={{ marginLeft: wp(22), marginRight: wp(8) }}
          >
            <Ionicons name="camera-reverse-sharp" size={wp(12)} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
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