import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import React from "react";
import AccountScreen from './../../../screens/ProtectedScreens/AccountScreens/AccountScreen';
import Responsiveness from "../../../helpers/Responsiveness";
import CancelBtn from "../../../widget/Buttons/CancelBtn";
import VehiclesScreen from "../../../screens/ProtectedScreens/AccountScreens/VehiclesScreen";
import BackButton from "../../../widget/Buttons/BackButton";
import AddVehicleScreen from "../../../screens/ProtectedScreens/AccountScreens/AddVehicleScreen";
import RegisterCertificateScreen from "../../../screens/ProtectedScreens/AccountScreens/RegisterCertificateScreen";
import CerificateCamera from "../../../screens/ProtectedScreens/AccountScreens/CerificateCamera";

const AccountNavigator = createStackNavigator();

export default function AccountStack() {
    return <AccountNavigator.Navigator>
        <AccountNavigator.Screen options={{headerShown: false}} name="account" component={AccountScreen}/>
        <AccountNavigator.Screen options={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: '700', fontSize: 24}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="vehicles" component={VehiclesScreen}/>
        <AccountNavigator.Screen options={{headerTitleAlign: 'center', headerTitle: "Vehicle", headerTitleStyle: {fontWeight: '700', fontSize: 24}, headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="add-vehicle" component={AddVehicleScreen}/>
        <AccountNavigator.Screen options={{headerTitleStyle: {fontWeight: '700', fontSize: 24}, headerTitle: '', headerLeft: ()=> <View className="ml-4"><BackButton /></View>}} name="register-certificate" component={RegisterCertificateScreen}/>
        <AccountNavigator.Screen options={{headerShown: false}} name="certificate-camera" component={CerificateCamera}/>
    </AccountNavigator.Navigator>
}