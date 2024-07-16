import React, { useContext } from "react";
import LocationHook from "../hooks/Usercontext/LocationHook";
import DrawerNavigation from "./ProtectedNavigationStack/DrawNavigation";
import AuthNavigation from "./authNavigationStack/AuthNavigation";
import PreferenceProvider from "../hooks/PrefrenceContext/PreferenceContext";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserContext } from "../hooks/Usercontext/UserContext";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const AuthStackNavigator = createStackNavigator();

const AppNavigation = () => {
  const User = useContext(useUserContext)

  return User?.user.profilePic && User.user.driversLicenseStatus ? (
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

