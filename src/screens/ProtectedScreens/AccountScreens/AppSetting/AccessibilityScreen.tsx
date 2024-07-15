import { View, Text } from 'react-native'
import React from 'react'
import SwitchItem from '../../../../component/SwitchItem'
import Responsiveness from '../../../../helpers/Responsiveness'
import { Ionicons } from '@expo/vector-icons';

const AccessibilityScreen = () => {
  return (
    <View className='flex-1'>
      <View style={{marginTop:Responsiveness.getResponsiveHeight(2), paddingVertical: Responsiveness.getResponsiveHeight(1)}} className='flex flex-row items-center justify-between bg-white px-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.6)}}>Screen flash for requests</Text>
        <SwitchItem />
      </View>
      <View className='p-4'>
        <Text>This makes your screen flash when you receive a request
        or alert, in addition to making a sound.</Text>
      </View>
      <View style={{marginTop:Responsiveness.getResponsiveHeight(2), paddingVertical: Responsiveness.getResponsiveHeight(1)}} className='flex flex-row items-center justify-between bg-white px-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.6)}}>Vibration for request</Text>
        <SwitchItem />
      </View>
      <View className='p-4'>
        <Text>This makes your phone vibrate when you receive a request
        or alert, in addition to making a sound.</Text>
      </View>
      <View style={{marginTop:Responsiveness.getResponsiveHeight(2), paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center justify-between bg-white px-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.6)}}>Languages</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
      <View className='p-4'>
        <Text>Riders will see this in your driver profile. This helps them know the best way to communicate with you.</Text>
      </View>
      <View style={{marginTop:Responsiveness.getResponsiveHeight(2), paddingVertical: Responsiveness.getResponsiveHeight(1)}} className='flex flex-row items-center justify-between bg-white px-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.6)}}>Let riders know I’m deaf or hard of hearing</Text>
        <SwitchItem />
      </View>
      <View className='p-4'>
        <Text>When this is on, riders will receive an in-app notification letting them know you’re deaf or hard of hearing. Riders will still be able to message you in the app, but not call.</Text>
      </View>
    </View>
  )
}

export default AccessibilityScreen