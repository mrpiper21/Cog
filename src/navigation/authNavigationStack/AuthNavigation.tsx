import React from "react";
import { View } from "react-native";
import {TouchableOpacity, StyleSheet} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import VerificationScreen from "../../screens/AthScreens/Verificationscreens/VerificationScreen";
import ProfilePhotoScreen from "../../screens/AthScreens/Verificationscreens/ProfilePhotoScreen";
import UploadProfilePhotoScreen from "../../screens/AthScreens/Verificationscreens/UploadProfilePhotoScreen";
import PhotoSubmittedScreen from "../../screens/AthScreens/Verificationscreens/PhotoSubmittedScreen";
import LicenseFrontScreen from "../../screens/AthScreens/Verificationscreens/LicenseFrontScreen";
import UploadFrontLicense from "../../screens/AthScreens/Verificationscreens/UploadFrontLicense";
import AccountReadyScreen from "../../screens/AthScreens/Verificationscreens/AccountReadyScreen";
import SplashScreen from "../../screens/Splash";
import LoginScreen from "../../screens/AthScreens/AuthrizationScreens/Login/LoginScreen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ForgotPassword from "../../screens/AthScreens/AuthrizationScreens/Login/ForgotPassword";
import CodeAuthenticationScreen from "../../screens/AthScreens/AuthrizationScreens/Login/CodeAuthenticationScreen";
import RecreatePassword from "../../screens/AthScreens/AuthrizationScreens/Login/RecreatePassword";
import RegisterEmail from './../../screens/AthScreens/AuthrizationScreens/Registeration/RegisterEmail';
import OTPVerificationScren from "../../screens/AthScreens/AuthrizationScreens/Registeration/OTPVerificationScren";
import SubmitEmail from "../../screens/AthScreens/AuthrizationScreens/Registeration/SubmitEmail";
import CreatenewPassword from "../../screens/AthScreens/AuthrizationScreens/Registeration/CreatenewPassword";
import RegisterFullName from "../../screens/AthScreens/AuthrizationScreens/Registeration/RegisterFullName";
import AccountTypeScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/AccountTypeScreen";
import InputDriveLocation from "../../screens/AthScreens/AuthrizationScreens/Registeration/InputDriveLocation";
import VehicleTypeScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/VehicleTypeScreen";
import DriverSurverScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/DriverSurverScreen";
import VehicleOwnerShipScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/VehicleOwnerShipScreen";
import AddCarDetailsScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/AddCarDetailsScreen";
import AddPersonalCarScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/AddPersonalCarScreen";
import SelectColorScreen from "../../screens/AthScreens/AuthrizationScreens/Registeration/SelectColorScreen";
import BackButton from "../../widget/Buttons/BackButton";

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  const navigation = useNavigation();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="splash" component={SplashScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="forgot-password" component={ForgotPassword} />
      <AuthStack.Screen name="send-code" component={CodeAuthenticationScreen} />
      <AuthStack.Screen name="reset-password" component={RecreatePassword} />
      <AuthStack.Screen name="register-email" component={RegisterEmail} />
      <AuthStack.Screen name="otp-verification" component={OTPVerificationScren} />
      <AuthStack.Screen name="submit-email" component={SubmitEmail} />
      <AuthStack.Screen name="createnew-password" component={CreatenewPassword} />
      <AuthStack.Screen name="register-name" component={RegisterFullName} />
      <AuthStack.Screen name="account-type" component={AccountTypeScreen} />
      <AuthStack.Screen name="inputDriver-location" component={InputDriveLocation} />
      <AuthStack.Screen name="vehicle-type" component={VehicleTypeScreen} />
      <AuthStack.Screen options={{headerLeft: ()=> <View className="ml-4"><BackButton /></View>, headerShown: true, headerTitle: ""}} name="driver-survey" component={DriverSurverScreen} />
      <AuthStack.Screen name="vehicle-ownership" component={VehicleOwnerShipScreen} />
      <AuthStack.Screen name="addCar-details" component={AddCarDetailsScreen} />
      <AuthStack.Screen name="addPersonalCar" component={AddPersonalCarScreen} />
      <AuthStack.Screen name="select-color"  options={{headerShown: true, headerTitle: "Color", headerTitleAlign: 'center', headerLeft: ()=> (
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
        )}} component={SelectColorScreen} />
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