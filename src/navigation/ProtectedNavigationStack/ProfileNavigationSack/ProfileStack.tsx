import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import ProfileScreen from "../../../screens/ProtectedScreens/ProfileScreens/ProfileScreen";
import ProfileDetailScreen from "../../../screens/ProtectedScreens/ProfileScreens/ProfileDetailScreen";
import RideRatingScreen from "../../../screens/ProtectedScreens/ProfileScreens/RideRatingScreen";
import AcceptanceScreen from "../../../screens/ProtectedScreens/ProfileScreens/AcceptanceScreen";
import CancellationScreen from "../../../screens/ProtectedScreens/ProfileScreens/CancellationScreen";
import EditProfileScreen from "../../../screens/ProtectedScreens/ProfileScreens/EditProfileScreen";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ProfileNavigator = createStackNavigator();

const ProfileStack = () => {
  const navigation = useNavigation() as any;
  return (
    <ProfileNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNavigator.Screen options={{headerShown: true, headerRight: ()=> (
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mr-3"
      >
        <AntDesign name="closecircleo" size={wp(8)} color="black" />
      </TouchableOpacity>
      )}} name="Profile" component={ProfileScreen} />
      <ProfileNavigator.Screen
        options={{headerShown: true, headerTitle: "Profile", headerTitleAlign: 'center', headerLeft: ()=> (
          <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
      className="ml-3"
    >
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={hp(3)}
        color="black"
      />
    </TouchableOpacity>
        ), headerRight: ()=> (
          <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.editButton}
          className="mr-33"
        >
          <Entypo name="edit" size={24} color="black" />
        </TouchableOpacity>
        )}}
        name="ProfileDetail"
        component={ProfileDetailScreen}
      />
      <ProfileNavigator.Screen
        name="RatingDetail"
        component={RideRatingScreen}
      />
      <ProfileNavigator.Screen name="Acceptance" component={AcceptanceScreen} />
      <ProfileNavigator.Screen
        name="Cancellation"
        component={CancellationScreen}
      />
      <ProfileNavigator.Screen
        name="EditProfile"
        component={EditProfileScreen}
      />
    </ProfileNavigator.Navigator>
  );
};

export default ProfileStack;

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
  backButton: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
})