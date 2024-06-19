import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EarningDeatailScreen from "../../../screens/ProtectedScreens/EarningScreens/EarningDeatailScreen";
import EarningActivityScreen from "../../../screens/ProtectedScreens/EarningScreens/EarningActivityScreen";
import EarningTripDetailScreen from "../../../screens/ProtectedScreens/EarningScreens/EarningTripDetailScreen";
import EarningScreen from "../../../screens/ProtectedScreens/EarningScreens/EarningScreen";

const EarningNavigator = createStackNavigator();

const EarningStack = () => {
  return (
    <EarningNavigator.Navigator screenOptions={{ headerShown: false }}>
      <EarningNavigator.Screen name="Earning" component={EarningScreen} />
      <EarningNavigator.Screen
        name="EarningDetails"
        component={EarningDeatailScreen}
      />
      <EarningNavigator.Screen
        name="EarningActivity"
        component={EarningActivityScreen}
      />
      <EarningNavigator.Screen
        name="EarningTripDetail"
        component={EarningTripDetailScreen}
      />
    </EarningNavigator.Navigator>
  );
};

export default EarningStack;
