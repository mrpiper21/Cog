import { View, Text, Image } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import SwitchItem from '../../../../component/SwitchItem'

const RideCheckScreen = () => {
  return (
    <View className="flex-1">
      <View>
        <Image style={{width: "100%"}} source={require("../../../../../assets/icons/settings/radiate.png")}/>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='px-4 space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '500'}}>What is Ride Check?</Text>
        <Text>In the case of an unexpected event, Glopilots will initiate a Ride Check, providing you with access to relevant safety tools so that you can quicly get the help you need.</Text>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(1.5)}} className='flex flex-row items-center justify-between px-4 bg-white'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Ride Check Notifications</Text>
        <SwitchItem />
      </View>
      <View className='px-4' style={{paddingVertical: Responsiveness.getResponsiveHeight(2)}}>
        <Text>When turned on, Glopilots will send you a Ride Check
        notification if a trip doesn’t progress as planned.</Text>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(1.5)}} className='flex flex-row items-center justify-between px-4 bg-white'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Crash Detection</Text>
        <SwitchItem />
      </View>
      <View className='px-4' style={{paddingVertical: Responsiveness.getResponsiveHeight(2)}}>
        <Text>When turned on, Glopilots will send you a Ride Check
        notification in the case of a possible crash.</Text>
      </View>
    </View>
  )
}

export default RideCheckScreen