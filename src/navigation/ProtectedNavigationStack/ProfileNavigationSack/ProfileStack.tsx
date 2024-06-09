import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "../../../screens/ProtectedScreens/ProfileScreens/ProfileScreen";
import ProfileDetailScreen from "../../../screens/ProtectedScreens/ProfileScreens/ProfileDetailScreen";

const ProfileNavigator = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNavigator.Screen name="Profiles" component={ProfileScreen} />
      <ProfileNavigator.Screen
        name="ProfileDetail"
        component={ProfileDetailScreen}
      />
    </ProfileNavigator.Navigator>
  );
};

export default ProfileStack;
