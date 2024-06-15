import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  UserContext,
  useUserContext,
} from "../../hooks/Usercontext/UserContext";

interface ModalProps {
  VisibleModal: boolean;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalView: React.FC<ModalProps> = ({
  VisibleModal,
  setVisibleModal,
  setIsLoading,
}) => {
  const [image, setImage] = useState<string>();
  const User = React.useContext(useUserContext);

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
        setImage(result?.assets[0].uri);
        User?.updateUserProfile({ profilePic: image }, setIsLoading);
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

    if (!result?.canceled) {
      setImage(result?.assets[0].uri);
      User?.updateUserProfile({ profilePic: image }, setIsLoading);
    }
    setVisibleModal(false);
  };
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
              width: "80%",
              backgroundColor: "#EEEE",
              padding: 20,
              paddingBottom: 40,
              borderRadius: 10,
              marginTop: 200,
            }}
          >
            <TouchableOpacity
              onPress={() => setVisibleModal(false)}
              className="items-end"
            >
              <Ionicons name="close" size={20} color="black" />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
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
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
