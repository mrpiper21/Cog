import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext, useState, useMemo, useRef } from "react";
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
// import LottieView from "lottie-react-native";
import ModalView from "../../../component/Profile/ModalView";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Btn from "../../../widget/Btn";
import Loading from "../../../widget/Loading";
import Responsiveness from "../../../helpers/Responsiveness";
import ProfileView from "../../../component/Profile/ProfileView";

const EditProfileScreen = () => {
  const User = useContext(useUserContext);
  const [image, setImage] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["70%", "80%"], []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-white">
      <View style={{ alignItems: "center", marginTop: Responsiveness.getResponsiveHeight(4) }}>
       <ProfileView setModalVisible={setModalVisible} image={image} />
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
        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.snapToIndex(1)}
        >
          <EditBtn />
        </TouchableOpacity>
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
        setIsLoading={setIsLoading}
      />
      <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef} index={-1}>
        <BottomSheetView>
          <TouchableOpacity
            onPress={() => bottomSheetRef.current?.close()}
            className="items-end m-5"
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <View className="border-2 border-gray-200 rounded-xl mx-2">
            <TextInput
              className="py-4 px-3"
              placeholder="Enter preferred language"
            />
          </View>
          <View className="items-center mt-10">
            <Btn type="action" label={"submit"} />
          </View>
        </BottomSheetView>
      </BottomSheet>
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
