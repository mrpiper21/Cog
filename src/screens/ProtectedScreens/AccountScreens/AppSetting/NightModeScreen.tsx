import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NightModeData from '../../../../Mock/NightModeItemData'
import { AntDesign } from '@expo/vector-icons';
import Responsiveness from '../../../../helpers/Responsiveness';

const NightModeScreen = () => {
    const [nightMode, setNightMode] = useState<String>("")
  return (
    <View className='flex-1'>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            {NightModeData.map((item)=> (
                <View key={item.id} style={{paddingVertical: Responsiveness.getResponsiveHeight(3), borderBottomWidth: 1}} className='flex border-[#EEE] px-4 bg-white'>
                <TouchableOpacity onPress={()=> setNightMode(item.label)} className='flex flex-row items-center justify-between'>
                    <Text>{item.label}</Text>
                    {nightMode === item.label && <View>{item.checkIcon}</View>}
                </TouchableOpacity>
            </View>
            ))}
        </View>
    </View>
  )
}

export default NightModeScreen