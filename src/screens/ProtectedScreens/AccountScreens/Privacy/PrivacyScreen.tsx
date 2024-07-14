import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import { Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HelpItem from '../../../../component/Help/HelpItem';

const PrivacyScreen = () => {
  return (
    <View className='flex-1'>
      <View className='bg-white px-4' style={{paddingVertical: Responsiveness.getResponsiveHeight(3)}}>
        <View style={{marginBottom: Responsiveness.getResponsiveHeight(2)}}>
            <Text style={{fontSize: Responsiveness.getResponsiveHeight(2.5), fontWeight: '700'}}>Privacy</Text>
        </View>
        <View className='flex flex-row items-center'>
            <View className='flex flex-row items-center'>
                <View className='items-center justify-center bg-blue-100 rounded-full' style={{height: Responsiveness.getResponsiveWidth(12), width: Responsiveness.getResponsiveWidth(12), marginRight: Responsiveness.getResponsiveWidth(3)}}>
                    <Image source={require("../../../../../assets/icons/lock.png")}/>
                </View>
                <View>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Privacy Center</Text>
                    <View style={{width: Responsiveness.getResponsiveWidth(70)}}><Text>Take control of your privacy and learn how we protect it.</Text></View>
                </View>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </View>
      </View>
      <View className='bg-white px-4' style={{paddingVertical: Responsiveness.getResponsiveHeight(3), marginTop: Responsiveness.getResponsiveHeight(1)}}>
        <View style={{marginBottom: Responsiveness.getResponsiveHeight(2)}}>
            <Text style={{fontSize: Responsiveness.getResponsiveHeight(2.5), fontWeight: '700'}}>Ads & Data</Text>
        </View>
        <View className='flex flex-row items-center'>
            <View className='flex flex-row items-center'>
                <View className='items-center justify-center bg-blue-100 rounded-full' style={{height: Responsiveness.getResponsiveWidth(12), width: Responsiveness.getResponsiveWidth(12), marginRight: Responsiveness.getResponsiveWidth(3)}}>
                <MaterialCommunityIcons name="lightning-bolt" size={35} color="#4460EF" />
                </View>
                <View>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Offers and Promos from Glopilots</Text>
                    <View style={{width: Responsiveness.getResponsiveWidth(70)}}><Text>Control personalized offers and promos from Glopilots</Text></View>
                </View>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(1), paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='flex-1 bg-white px-4 space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Third-party apps with account access</Text>
        <Text>You’ve given these apps access to your Glopilots account. Learn more</Text>
        <HelpItem type='forward' children={"Ara Labs Inc."}/>
        <HelpItem type='forward' children={"EduMe"}/>
        <HelpItem type='forward' children={"Ford Drive"}/>
        <HelpItem type='forward' children={"Car Advise"}/>
        <HelpItem type='forward' children={"Intruit (TurboTax, Quickbooks, Mint)"}/>
      </View>
      
    </View>
  )
}

export default PrivacyScreen