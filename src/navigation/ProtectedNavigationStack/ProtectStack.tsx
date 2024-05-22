import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/ProtectedScreens/HomeScreen";
import PreferenceScreen from "../../screens/ProtectedScreens/PreferenceScreen";
import RecommendationScreen from "../../screens/ProtectedScreens/RecommendationScreen";
import DrawStack from "./DrawStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../../screens/ProtectedScreens/ProfileScreen";
import ProfileDetailScreen from "../../screens/ProtectedScreens/ProfileDetailScreen";

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
    </Stack.Navigator>
  );
};

export default ProtectStack;
