import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness';
import { useAppContext } from '../../../../hooks/AppSettingContext';

const NightModeScreen = () => {
    const AppSettings = useContext(useAppContext)
  return (
    <View className='flex-1'>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            {AppSettings?.nightMode.nightMode.map((item)=> (
                <TouchableOpacity onPress={()=> AppSettings.setdefaultTheme(item.label)} key={item.id} style={{paddingVertical: Responsiveness.getResponsiveHeight(3), borderBottomWidth: 1}} className='flex border-[#EEE] px-4 bg-white'>
                <View className='flex flex-row items-center justify-between'>
                    <Text>{item.label}</Text>
                    {AppSettings.defaultTheme === item.label && <View>{item.checkIcon}</View>}
                </View>
            </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

export default NightModeScreen