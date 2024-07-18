import { View, Text, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness';
import SwitchItem from '../../../../component/SwitchItem';
import { useAppContext } from '../../../../hooks/AppSettingContext';

const SoundScreen = () => {
    const settings = useContext(useAppContext)
  return (
    <View className='flex-1 bg-white px-4'>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Voice Navigation</Text>
        <SwitchItem isEnabled={settings?.sound.voiceNavigation} toggleSwitch={()=>settings?.sound.updateVoiceNavigation(settings?.sound.voiceNavigation)} />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Read Rider Messages</Text>
        <SwitchItem isEnabled={settings?.sound.readRiderMessage} toggleSwitch={()=> settings?.sound.updateReadRiderMessage(settings?.sound.readRiderMessage)} />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Announce Trip Events</Text>
        <SwitchItem isEnabled={settings?.sound.announceTripEvents} toggleSwitch={()=> settings?.sound.updateAnnounceTripEvents(settings?.sound.announceTripEvents)} />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Seat Belt Reminder</Text>
        <SwitchItem isEnabled={settings?.sound.seatBeltReminder} toggleSwitch={()=> settings?.sound.updateSeatBeltReminder(settings?.sound.seatBeltReminder)} />
      </View>
    </View>
  )
}

export default SoundScreen