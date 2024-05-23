import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/ProtectedScreens/HomeScreens/HomeScreen";
import PreferenceScreen from "../../screens/ProtectedScreens/HomeScreens/PreferenceScreen";
import RecommendationScreen from "../../screens/ProtectedScreens/HomeScreens/RecommendationScreen";
import DrawStack from "./DrawStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../../screens/ProtectedScreens/ProfileScreens/ProfileScreen";
import ProfileDetailScreen from "../../screens/ProtectedScreens/ProfileScreens/ProfileDetailScreen";
import RideRatingScreen from "../../screens/ProtectedScreens/ProfileScreens/RideRatingScreen";
import AcceptanceScreen from "../../screens/ProtectedScreens/ProfileScreens/AcceptanceScreen";
import CancellationScreen from "../../screens/ProtectedScreens/ProfileScreens/CancellationScreen";
import EditProfileScreen from "../../screens/ProtectedScreens/ProfileScreens/EditProfileScreen";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const ProtectStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Preference" component={PreferenceScreen} />
      <Stack.Screen name="Recommendation" component={RecommendationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="RatingDetail" component={RideRatingScreen} />
      <Stack.Screen name="Acceptance" component={AcceptanceScreen} />
      <Stack.Screen name="Cancellation" component={CancellationScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProtectStack;
