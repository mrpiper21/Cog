import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import React from "react";
import AccountScreen from './../../../screens/ProtectedScreens/AccountScreens/AccountScreen';
import Responsiveness from "../../../helpers/Responsiveness";
import CancelBtn from "../../../widget/Buttons/CancelBtn";
import VehiclesScreen from "../../../screens/ProtectedScreens/AccountScreens/VehiclesScreen";
import BackButton from "../../../widget/Buttons/BackButton";
import AddVehicleScreen from "../../../screens/ProtectedScreens/AccountScreens/AddVehicleScreen";
import RegisterCertificateScreen from "../../../screens/ProtectedScreens/AccountScreens/RegisterCertificateScreen";
import CerificateCamera from "../../../screens/ProtectedScreens/AccountScreens/CerificateCamera";
import CarunderReviewScreen from "../../../screens/ProtectedScreens/AccountScreens/CarunderReviewScreen";
import DocumentScreen from "../../../screens/ProtectedScreens/AccountScreens/DocumentScreen";
import PaymentScreen from "../../../screens/ProtectedScreens/AccountScreens/PaymentScreen";
import AddPaymentScreen from "../../../screens/ProtectedScreens/AccountScreens/AddPaymentScreen";
import AddCardScreen from "../../../screens/ProtectedScreens/AccountScreens/AddCardScreen";
import TaxInformationScreen from "../../../screens/ProtectedScreens/AccountScreens/TaxInformationScreen";
import ManageAccountScreen from "../../../screens/ProtectedScreens/AccountScreens/ManageAccountScreen";
import AccountPhoneNumberScreen from "../../../screens/ProtectedScreens/AccountScreens/AccountPhoneNumberScreen";

const AccountNavigator = createStackNavigator();

export default function AccountStack() {
    return <AccountNavigator.Navigator>
        <AccountNavigator.Screen options={{headerShown: false}} name="account" component={AccountScreen}/>
        <AccountNavigator.Screen options={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: '700', fontSize: 24}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="vehicles" component={VehiclesScreen}/>
        <AccountNavigator.Screen options={{headerTitleAlign: 'center', headerTitle: "Vehicle", headerTitleStyle: {fontWeight: '700', fontSize: 24}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="add-vehicle" component={AddVehicleScreen}/>
        <AccountNavigator.Screen options={{headerTitleStyle: {fontWeight: '700', fontSize: 24}, headerTitle: '', headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="register-certificate" component={RegisterCertificateScreen}/>
        <AccountNavigator.Screen options={{headerShown: false}} name="certificate-camera" component={CerificateCamera}/>
        <AccountNavigator.Screen options={{ headerTitle: '', headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="car-underReview" component={CarunderReviewScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: 'Documents', headerTitleAlign: 'center', headerBackTitleStyle: {fontWeight: '700'}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>, headerRight: ()=> <TouchableOpacity style={styles.helpIcon}>
          <AntDesign name="questioncircle" size={24} color="black" />
        </TouchableOpacity>}} name="documents" component={DocumentScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: 'Payment', headerTitleAlign: 'center', headerBackTitleStyle: {fontWeight: '700'}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="payments" component={PaymentScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: 'Add Payment Method', headerTitleAlign: 'center', headerBackTitleStyle: {fontWeight: '700'}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="add-payment" component={AddPaymentScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: 'Add Card', headerTitleAlign: 'center', headerBackTitleStyle: {fontWeight: '700'}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="add-card" component={AddCardScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: 'Tax Information', headerTitleAlign: 'center', headerBackTitleStyle: {fontWeight: '700'}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="tax-info" component={TaxInformationScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: 'Account', headerTitleAlign: 'center', headerBackTitleStyle: {fontWeight: '700'}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="manage-account" component={ManageAccountScreen}/>
        <AccountNavigator.Screen options={{ headerTitle: "", headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="acountPhone-number" component={AccountPhoneNumberScreen}/>
    </AccountNavigator.Navigator>
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: wp(13),
      marginHorizontal: wp(3),
    },
    helpIcon: {
      height: wp(10),
      width: wp(10),
      borderWidth: 1,
      borderColor: "lightgray",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: wp(10),
      marginRight: wp(2)
    },
    rideBtn: {
      width: wp(20),
      height: hp(5),
      borderRadius: wp(3),
      alignItems: "center",
      justifyContent: "center",
    },
    deliveryBtn: {
      width: wp(28),
      height: hp(5),
      borderRadius: wp(3),
      alignItems: "center",
      justifyContent: "center",
    },
    satisfactoryBar: {
      width: wp(77),
      height: wp(2),
      backgroundColor: "#4460EF",
      borderRadius: wp(10),
      marginHorizontal: wp(2),
    },
  });