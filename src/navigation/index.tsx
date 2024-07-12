import React from "react";
import LocationHook from "../hooks/Usercontext/LocationHook";
import DrawerNavigation from "./ProtectedNavigationStack/DrawNavigation";
import AuthNavigation from "./authNavigationStack/AuthNavigation";
import { useVerificationContext } from "../Context";
import PreferenceProvider from "../hooks/PrefrenceContext/PreferenceContext";
import { createStackNavigator } from "@react-navigation/stack";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const AuthStackNavigator = createStackNavigator();

const AppNavigation = () => {
  const Verification = useVerificationContext();
  console.log(
    "verifying photo in my app navigation...",
    Verification?.isVerified.Profile_Photo
  );

  return Verification.isVerified.isAuthentication ? (
    <LocationHook>
      <PreferenceProvider>
        <DrawerNavigation />
      </PreferenceProvider>
    </LocationHook>
  ) : (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen options={{headerShown: false}} name="AuthStack"  component={AuthNavigation} />
    </AuthStackNavigator.Navigator>
  );
};

export default AppNavigation;