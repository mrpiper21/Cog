import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useVerificationContext } from "../../Context";

interface ModalProps {
  VisibleModal: boolean;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalView: React.FC<ModalProps> = ({ VisibleModal, setVisibleModal }) => {
  const [image, setImage] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const Verification = useVerificationContext();

  const pickImage = async (mode: string) => {
    // ... your image picking code here ...
    if (mode === "gallery") {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result?.canceled) {
        // saveImage(result?.assets[0].uri);
        // await setImage(result?.assets[0].uri);
      }
      setVisibleModal(false);
    }
  };

  const takePicture = async () => {
    // ... your picture taking code here ...
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result?.assets[0]?.uri);
    if (!result?.canceled) {
      // saveImage(result?.assets[0].uri);
      // await setImage(result?.assets[0].uri);
    }
    setVisibleModal(false);
  };

  if (isloading)
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Please wait</Text>
      </View>
    );
  return (
    <View style={{}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={VisibleModal}
        onRequestClose={() => {
          setVisibleModal(!VisibleModal);
        }}
        style={{ marginTop: 40 }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              backgroundColor: "#EEEE",
              padding: 20,
              borderRadius: 10,
              marginTop: 150,
            }}
          >
            <TouchableOpacity
              onPress={() => pickImage("gallery")}
              style={{ flex: 1, alignItems: "center" }}
            >
              <Ionicons name="images" size={40} color="black" />
              <Text>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePicture}
              style={{ flex: 1, alignItems: "center" }}
            >
              <Ionicons name="camera" size={40} color="black" />
              <Text>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
