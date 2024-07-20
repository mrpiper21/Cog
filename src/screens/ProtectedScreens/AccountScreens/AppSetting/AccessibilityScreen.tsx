import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import SwitchItem from '../../../../component/SwitchItem'
import Responsiveness from '../../../../helpers/Responsiveness'
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../../../hooks/AppSettingContext';

const AccessibilityScreen = () => {
  const Settings = useContext(useAppContext)
  return (
    <View className='flex-1'>
      <View style={{marginTop:Responsiveness.getResponsiveHeight(2), paddingVertical: Responsiveness.getResponsiveHeight(1)}} className='flex flex-row items-center justify-between bg-white px-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.6)}}>Screen flash for requests</Text>
        <SwitchItem isEnabled={Settings?.accessibility.screenFlash} toggleSwitch={()=> Settings?.accessibility.toggleScreenFlash(Settings?.accessibility.screenFlash)} />
      </View>
      <View className='p-4'>
        <Text>This makes your screen flash when you receive a request
        or alert, in addition to making a sound.</Text>
      </View>
      <View style={{marginTop:Responsiveness.getResponsiveHeight(2), paddingVertical: Responsiveness.getResponsiveHeight(1)}} className='flex flex-row items-center justify-between bg-white px-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.6)}}>Vibration for request</Text>
        <SwitchItem isEnabled={Settings?.accessibility.vibrationRequest} toggleSwitch={() => Settings?.accessibility.toggleVibration(Settings?.accessibility.vibrationRequest)} />
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
        <SwitchItem isEnabled={Settings?.accessibility.impairment} toggleSwitch={()=> Settings?.accessibility.toggleImpairment(Settings?.accessibility.impairment)} />
      </View>
      <View className='p-4'>
        <Text>When this is on, riders will receive an in-app notification letting them know you’re deaf or hard of hearing. Riders will still be able to message you in the app, but not call.</Text>
      </View>
    </View>
  )
}

export default AccessibilityScreen