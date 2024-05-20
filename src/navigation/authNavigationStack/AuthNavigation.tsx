import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VerificationScreen from "../../screens/AthScreens/VerificationScreen";
import ProfilePhotoScreen from "../../screens/AthScreens/ProfilePhotoScreen";
import UploadProfilePhotoScreen from "../../screens/AthScreens/UploadProfilePhotoScreen";
import PhotoSubmittedScreen from "../../screens/AthScreens/PhotoSubmittedScreen";
import LicenseFrontScreen from "../../screens/AthScreens/LicenseFrontScreen";
import UploadFrontLicense from "../../screens/AthScreens/UploadFrontLicense";
import AccountReadyScreen from "../../screens/AthScreens/AccountReadyScreen";

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Verification" component={VerificationScreen} />
      <AuthStack.Screen name="Profile-photo" component={ProfilePhotoScreen} />
      <AuthStack.Screen
        name="Upload-profile-photo"
        component={UploadProfilePhotoScreen}
      />
      <AuthStack.Screen
        name="Photo-submitted"
        component={PhotoSubmittedScreen}
      />
      <AuthStack.Screen name="License-front" component={LicenseFrontScreen} />
      <AuthStack.Screen name="upload-front" component={UploadFrontLicense} />
      <AuthStack.Screen name="Account-ready" component={AccountReadyScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
