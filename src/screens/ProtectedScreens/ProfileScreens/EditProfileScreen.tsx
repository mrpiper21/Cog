import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import BackButton from "../../../widget/Buttons/BackButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import EditBtn from "../../../component/Profile/EditBtn";
import { useUserContext } from "../../../hooks/Usercontext/UserContext";
import { baseURL } from "../../../Services/authorization";
import * as ImagePicker from "expo-image-picker";
import ModalView from "../../../component/Profile/ModalView";

const EditProfileScreen = () => {
  const User = useContext(useUserContext);
  const [image, setImage] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);

  const upload = async (mode: any) => {
    try {
      let result;

      {
        /**Choose from library */
      }
      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result?.canceled) {
          saveImage(result?.assets[0].uri);
          await setImage(result?.assets[0].uri);
        }
      }

      {
        /**Take a picture */
      }
      // await ImagePicker.requestCameraPermissionsAsync();
      // result = await ImagePicker.launchCameraAsync({
      //   cameraType: ImagePicker.CameraType.front,
      //   allowsEditing: true,
      //   aspect: [1, 1],
      //   quality: 1,
      // });
      // if (!result?.canceled) {
      //   saveImage(result?.assets[0].uri);
      //   // await setImage(result?.assets[0].uri);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const saveImage = async (image: any) => {
    try {
      setImage(image);
      console.log("image uri...", image);
      // setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };

  {
    /**remove Image */
  }
  const removeImage = async () => {
    try {
      saveImage(null);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View
        style={{
          marginTop: wp(12),
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: wp(3),
        }}
      >
        <BackButton />
        <Text
          style={{ fontWeight: "600", fontSize: wp(4), marginLeft: wp(28) }}
        >
          Edit Profile
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: wp(8) }}>
        <View>
          {/* <Image
            style={styles.ImageItem}
            source={{
              uri: `${baseURL}${User?.user.email}`,
            }}
          /> */}
          {image ? (
            <Image
              style={styles.ImageItem}
              source={{
                uri: image,
              }}
            />
          ) : (
            <EvilIcons name="user" size={150} color="black" />
          )}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            // onPress={() => upload("gallery")}
            style={styles.cameraIcon}
          >
            <AntDesign name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: wp(2) }}>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>
            {User?.user.email}
          </Text>
        </View>
      </View>
      <View style={styles.editLanguageContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={{ marginRight: wp(3) }}
            name="globe-outline"
            size={wp(7)}
            color="black"
          />
          <View>
            <Text>Add languages you know</Text>
            <Text style={{ fontSize: wp(3.5), fontWeight: "500" }}>
              Knows English and Spanish
            </Text>
          </View>
        </View>
        <EditBtn />
      </View>
      <View style={styles.editCountryContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="home-variant"
            size={wp(7)}
            color="black"
            style={{ marginRight: wp(3) }}
          />
          <View>
            <Text>Where you’re from</Text>
            <Text style={{ fontSize: wp(3.5), fontWeight: "500" }}>
              From California, USA
            </Text>
          </View>
        </View>
        <EditBtn />
      </View>
      <ModalView
        VisibleModal={modalVisible}
        setVisibleModal={setModalVisible}
      />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: wp(10),
    marginHorizontal: wp(3),
  },
  editButton: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageItem: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(15),
  },
  cameraIcon: {
    height: wp(9),
    width: wp(9),
    borderRadius: wp(10),
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: wp(4),
    paddingVertical: wp(3),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F5F5F5",
  },
  editCountryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(4),
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  editLanguageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(4),
    marginTop: wp(5),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
});
