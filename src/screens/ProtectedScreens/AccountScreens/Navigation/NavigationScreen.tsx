import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import { Ionicons } from '@expo/vector-icons';
import NavigationItem from '../../../../component/Account/Navigation/NavigationItem';
import { useAppContext } from '../../../../hooks/AppSettingContext';
import SwitchItem from '../../../../component/SwitchItem';

const NavigationScreen = () => {
  const Settings = useContext(useAppContext)
  return (
    <View className='flex-1'>
      <View className='py-4 bg-white'>
        <View className='px-4'>
          <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Navigation App</Text>
        </View>
        {Settings?.navigationMapSettings.map((items)=> (
          <NavigationItem key={items.id} title={items.title} text={items.children} rightNode={items.check} />
        ))}
      </View>
      <View className='flex-1 py-3 bg-white mt-3'>
        <View className='px-4'>
          <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Navigation App</Text>
        </View>
        <View style={{borderBottomWidth: 1, paddingVertical: Responsiveness.getResponsiveHeight(1.5)}} className='px-4 border-[#EEE]'>
        <View className='flex flex-row items-center justify-between'>
          <View className='space-y-1'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '500'}}>{Settings?.navigationSettings.AutoPoolTrip.title}</Text>
            <View style={{width: Responsiveness.getResponsiveWidth(80)}}><Text>{Settings?.navigationSettings.AutoPoolTrip.children}</Text></View>
          </View>
          <View><SwitchItem isEnabled={Settings?.navigationSettings.autaPoolTrip} toggleSwitch={()=> Settings?.navigationSettings.toggleAutoPoolTrip(Settings?.navigationSettings.autaPoolTrip)}  /></View>
        </View>
        <View className='flex flex-row items-center justify-between'>
          <View className='space-y-1'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '500'}}>{Settings?.navigationSettings.AutoNavigate.title}</Text>
            <View style={{width: Responsiveness.getResponsiveWidth(80)}}><Text>{Settings?.navigationSettings.AutoNavigate.children}</Text></View>
          </View>
          <View><SwitchItem isEnabled={Settings?.navigationSettings.autoNavigate} toggleSwitch={()=> Settings?.navigationSettings.toggleAutoNavigate(Settings?.navigationSettings.autoNavigate)}  /></View>
        </View>
        <View className='flex flex-row items-center justify-between p-4'>
          <Text>Routing</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </View>
      </View>
    </View>
  )
}

export default NavigationScreen