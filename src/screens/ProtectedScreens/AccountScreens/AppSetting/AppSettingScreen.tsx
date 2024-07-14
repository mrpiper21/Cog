import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SettingsItemData from '../../../../Mock/SettingsItemData'
import Responsiveness from '../../../../helpers/Responsiveness'
import { useNavigation } from '@react-navigation/native'

const AppSettingScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex-1 bg-white'>
      {SettingsItemData.map((item)=> (
        <View className='border-[#EEE]' style={{paddingVertical: Responsiveness.getResponsiveHeight(2.8), borderBottomWidth: 1}}>
            <TouchableOpacity onPress={()=> navigation.navigate(item.route)} className='flex flex-row items-center justify-between mx-4'>
                <View className='flex flex-row items-center space-x-4'>
                    <View>{item.leftIcon}</View>
                    <Text>{item.name}</Text>
                </View>
                <View>{item.rightIcon}</View>
            </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default AppSettingScreen