import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";
import PreviewFrontLicense from "../../screens/AthScreens/Verificationscreens/PreviewFrontLicense";
import ShutterItem from "./ShutterItem";
import CancelBtn from "../../widget/Buttons/CancelBtn";


interface CameraProps {
  type: "box" | "round"
  photo: any;
  setPhoto: React.Dispatch<React.SetStateAction<any>>
}

const CameraActivity: React.FC<CameraProps> = ({type, setPhoto, photo}) => {
  const [facing, setFacing] = useState<"front" | "back">("back");
  // const [photo, setPhoto] = useState() as any;
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
      // setIsLoading(true);
    let options = {
      quality: 1,
      base64: true,
      exit: false,
    };
    let newPhoto = await cameraRef.current?.takePictureAsync(options);
    if (newPhoto) {
      const fileInfo = await FileSystem.getInfoAsync(newPhoto.uri);
      setPhoto(newPhoto);
      // setIsLoading(false);
    }
  };

  if (photo && type !=="round") {
    return (
      <PreviewFrontLicense
        photo={photo}
        setPhoto={setPhoto}
        hasMediaLibraryPermission={hasMediaLibraryPermission}
      />
    );
  }

  if (!permission?.granted) {
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
    <View className="flex bg-white" style={styles.container}>
      <View className="items-center mt-10">
          <View
            style={[styles.cameraContainer, type === 'round' && { height: wp(100)}]}
            className="overflow-hidden"
          >
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
              {/* {loading && <ActivityIndicator />} */}
              <View style={styles.buttonContainer}></View>
            </CameraView>
          </View>
      </View>
      <View style={styles.shutterContainer}>
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
          onPress={toggleCameraFacing}
          style={{ marginLeft: wp(22), marginRight: wp(8) }}
        >
          <Ionicons name="camera-reverse-sharp" size={wp(12)} color="#4460EF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CameraActivity

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    // height: hp(100)
  },
  cameraContainer: {
    width: wp(95), 
    height: wp(60)
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
  shutterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: wp(2),
  },
});