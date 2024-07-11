import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/ProtectedScreens/HomeScreens/HomeScreen";
import PreferenceScreen from "../../screens/ProtectedScreens/HomeScreens/PreferenceScreen";
import RecommendationScreen from "../../screens/ProtectedScreens/HomeScreens/RecommendationScreen";
import MessageScreen from "../../screens/ProtectedScreens/MessageScreens/MessageScreen";
import TripDetailScreen from "../../screens/ProtectedScreens/MessageScreens/TripDetailScreen";
import OpportunityScreen from "../../screens/ProtectedScreens/OpportunityScreens/OpportunityScreen";
import ProfileStack from "./ProfileNavigationSack/ProfileStack";
import EarningStack from "./EarnigNavigator";
import HelpNavigator from "./HelpNavigator";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CashoutScreen from "../../screens/ProtectedScreens/WalletScreens/CashoutScreen";
import WalletScreen from "../../screens/ProtectedScreens/WalletScreens/WalletScreen";
import PaymentMethodScreen from "../../screens/ProtectedScreens/WalletScreens/PaymentMethodScreen";
import AccountStack from './AccountNavigator/index';

const Stack = createStackNavigator();
const ProtectStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown:  false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Preference" component={PreferenceScreen} />
      <Stack.Screen name="Recommendation" component={RecommendationScreen} />
      <Stack.Screen options={{headerShown: true, headerLeft: ()=> (
        <View />
      ), headerRight: ()=> (
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cancelBtn}
        className="mr-3"
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      )}} name="Opportunity" component={OpportunityScreen} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      <Stack.Screen
         name="Message"
         component={MessageScreen}
         options={{
           headerShown: true,
           headerRight: () => (
             <TouchableOpacity
               onPress={() => navigation.goBack()}
               className="mr-3"
             >
               <AntDesign name="closecircleo" size={wp(8)} color="black" />
             </TouchableOpacity>
           ),
         }}
       />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="cashout" component={CashoutScreen}/>
      <Stack.Screen name="payment-method" options={{headerShown: true, headerTitle: "Payment Methods", headerTitleAlign: 'center', headerLeft: ()=> (
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
        )}} component={PaymentMethodScreen}/>
      <Stack.Screen name="Profiles" component={ProfileStack} />
      <Stack.Screen name="Earnings" component={EarningStack} />
      <Stack.Screen name="Helproute" component={HelpNavigator} />
      <Stack.Screen name="Accountroute" component={AccountStack}/>
    </Stack.Navigator>
  );
};

export default ProtectStack;

const styles = StyleSheet.create({
  cancelBtn: {
    height: wp(8),
    width: wp(8),
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
});
