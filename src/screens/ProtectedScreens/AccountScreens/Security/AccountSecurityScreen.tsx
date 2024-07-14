import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Responsiveness from '../../../../helpers/Responsiveness';
import { useNavigation } from '@react-navigation/native';

const AccountSecurityScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Logging in to Glopilots</Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("account-password", { type: "verify", HeaderTitle: "Verify Password", message: "For your security, please enter your old password.", btnText: "Verify Password", placeHolderText: "Enter your password" })} style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1, borderColor: 'lightgray'}} className='flex flex-row justify-between'>
        <View className='flex space-y-2'>
            <Text style={{fontWeight: '500', fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Password</Text>
            <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(4)}}>**********</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("verifyText-Message")} style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1, borderColor: 'lightgray'}} className='flex flex-row justify-between'>
        <View className='flex space-y-2'>
            <Text style={{fontWeight: '500', fontSize: Responsiveness.getResponsiveWidth(3.5)}}>2-Step verification</Text>
            <Text>OFF</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </TouchableOpacity>
      <View className='space-y-3' style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Connectedd Social Apps</Text>
        <Text>You’ve allowed these social apps to sign in to your Glopilots account.</Text>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveWidth(4), borderBottomWidth: 1, borderColor: 'lightgray'}}  className='flex flex-row item-center justify-between'>
        <View className='flex flex-row items-center'>
            <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../../../../assets/icons/GoogleIcon.png")}/>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Google</Text>
        </View>
        <TouchableOpacity className='flex items-center bg-gray-200 justify-center rounded-xl' style={{width: Responsiveness.getResponsiveWidth(25), height: Responsiveness.getResponsiveHeight(5)}}>
            <Text>Disconnect</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveWidth(4), borderBottomWidth: 1, borderColor: 'lightgray'}}  className='flex flex-row item-center justify-between'>
        <View className='flex flex-row items-center'>
            <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../../../../assets/icons/FacebookIcon.png")}/>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Facebook</Text>
        </View>
        <TouchableOpacity className='flex items-center bg-gray-200 justify-center rounded-xl' style={{width: Responsiveness.getResponsiveWidth(25), height: Responsiveness.getResponsiveHeight(5)}}>
            <Text>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountSecurityScreen