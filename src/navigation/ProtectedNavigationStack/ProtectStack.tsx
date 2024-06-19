import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/ProtectedScreens/HomeScreens/HomeScreen";
import PreferenceScreen from "../../screens/ProtectedScreens/HomeScreens/PreferenceScreen";
import RecommendationScreen from "../../screens/ProtectedScreens/HomeScreens/RecommendationScreen";
import MessageScreen from "../../screens/ProtectedScreens/MessageScreens/MessageScreen";
import TripDetailScreen from "../../screens/ProtectedScreens/MessageScreens/TripDetailScreen";
import OpportunityScreen from "../../screens/ProtectedScreens/OpportunityScreens/OpportunityScreen";
import WalletScreen from "../../screens/ProtectedScreens/WalletScreens/WalletScreen";
import ProfileStack from "./ProfileNavigationSack/ProfileStack";
import EarningStack from "./EarnigNavigator";
import HelpNavigator from "./HelpNavigator";

const Stack = createStackNavigator();
const ProtectStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Preference" component={PreferenceScreen} />
      <Stack.Screen name="Recommendation" component={RecommendationScreen} />
      <Stack.Screen name="Opportunity" component={OpportunityScreen} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Profile" component={ProfileStack} />
      <Stack.Screen name="Earnings" component={EarningStack} />
      <Stack.Screen name="Help" component={HelpNavigator} />
    </Stack.Navigator>
  );
};

export default ProtectStack;
