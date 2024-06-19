import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProfileScreen from "../../../screens/ProtectedScreens/ProfileScreens/ProfileScreen";
import ProfileDetailScreen from "../../../screens/ProtectedScreens/ProfileScreens/ProfileDetailScreen";
import RideRatingScreen from "../../../screens/ProtectedScreens/ProfileScreens/RideRatingScreen";
import AcceptanceScreen from "../../../screens/ProtectedScreens/ProfileScreens/AcceptanceScreen";
import CancellationScreen from "../../../screens/ProtectedScreens/ProfileScreens/CancellationScreen";
import EditProfileScreen from "../../../screens/ProtectedScreens/ProfileScreens/EditProfileScreen";

const ProfileNavigator = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNavigator.Screen name="Profiles" component={ProfileScreen} />
      <ProfileNavigator.Screen
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
