import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/ProtectedScreens/HomeScreens/HomeScreen";
import PreferenceScreen from "../../screens/ProtectedScreens/HomeScreens/PreferenceScreen";
import RecommendationScreen from "../../screens/ProtectedScreens/HomeScreens/RecommendationScreen";
import ProfileScreen from "../../screens/ProtectedScreens/ProfileScreens/ProfileScreen";
import ProfileDetailScreen from "../../screens/ProtectedScreens/ProfileScreens/ProfileDetailScreen";
import RideRatingScreen from "../../screens/ProtectedScreens/ProfileScreens/RideRatingScreen";
import AcceptanceScreen from "../../screens/ProtectedScreens/ProfileScreens/AcceptanceScreen";
import CancellationScreen from "../../screens/ProtectedScreens/ProfileScreens/CancellationScreen";
import EditProfileScreen from "../../screens/ProtectedScreens/ProfileScreens/EditProfileScreen";
import MessageScreen from "../../screens/ProtectedScreens/MessageScreens/MessageScreen";
import TripDetailScreen from "../../screens/ProtectedScreens/MessageScreens/TripDetailScreen";
import OpportunityScreen from "../../screens/ProtectedScreens/OpportunityScreens/OpportunityScreen";
import EarningScreen from "../../screens/ProtectedScreens/EarningScreens/EarningScreen";
import EarningDeatailScreen from "../../screens/ProtectedScreens/EarningScreens/EarningDeatailScreen";
import EarningActivityScreen from "../../screens/ProtectedScreens/EarningScreens/EarningActivityScreen";
import EarningTripDetailScreen from "../../screens/ProtectedScreens/EarningScreens/EarningTripDetailScreen";
import WalletScreen from "../../screens/ProtectedScreens/WalletScreens/WalletScreen";
import HelpScreen from "../../screens/HelpScreens/HelpScreen";
import HelpTripScreen from "../../screens/HelpScreens/HelpTripScreen";
import TrackingAcceptanceScreen from "../../screens/HelpScreens/TrackingAcceptanceScreen";
import AccountAppScreen from "../../screens/HelpScreens/AccountAppScreen";
import ChangeAccountSettingScreen from "../../screens/HelpScreens/ChangeAccountSettingScreen";
import DeleteDriverAccountScreen from "../../screens/HelpScreens/DeleteDriverAccountScreen";
import DeleteAccountHereScreen from "./../../screens/HelpScreens/DeleteAccountHereScreen";

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
      <Stack.Screen name="Opportunity" component={OpportunityScreen} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      <Stack.Screen name="EarningDetails" component={EarningDeatailScreen} />
      <Stack.Screen name="EarningActivity" component={EarningActivityScreen} />
      <Stack.Screen
        name="EarningTripDetail"
        component={EarningTripDetailScreen}
      />
      <Stack.Screen name="Earnings" component={EarningScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Help-Trip" component={HelpTripScreen} />
      <Stack.Screen
        name="Tracking-Acceptance"
        component={TrackingAcceptanceScreen}
      />
      <Stack.Screen name="Account-App" component={AccountAppScreen} />
      <Stack.Screen
        name="ChangeAcc-Setting"
        component={ChangeAccountSettingScreen}
      />
      <Stack.Screen
        name="DeleteDriver-Acc"
        component={DeleteDriverAccountScreen}
      />
      <Stack.Screen name="Delete-Here" component={DeleteAccountHereScreen} />
    </Stack.Navigator>
  );
};

export default ProtectStack;
