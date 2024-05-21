import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/ProtectedScreens/HomeScreen";
import SearchScreen from "../../screens/ProtectedScreens/SearchScreen";
import PreferenceScreen from "../../screens/ProtectedScreens/PreferenceScreen";
import RecommendationScreen from "../../screens/ProtectedScreens/RecommendationScreen";

const Stack = createStackNavigator();
const ProtectStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Preference" component={PreferenceScreen} />
      <Stack.Screen name="Recommendation" component={RecommendationScreen} />
    </Stack.Navigator>
  );
};

export default ProtectStack;
