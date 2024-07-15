import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SwitchItem from '../../../../component/SwitchItem'
import Responsiveness from '../../../../helpers/Responsiveness'
import Checkebox from '../../../../component/Checkebox'

const SpeedLimitScreen = () => {
    const [check, setCheck] = useState<boolean>(false)
  return (
    <View>
     <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='items-center flex-row justify-between bg-white px-4'>
        <Text>Show Speed Limit</Text>
        <SwitchItem />
     </View>
     <View className='px-4' style={{marginVertical: Responsiveness.getResponsiveHeight(2.5)}}>
        <Text style={{fontWeight: '600'}}>Speeding alerts</Text>
        <Text>Set when you want to get alerts</Text>
     </View>
     <View style={{height: Responsiveness.getResponsiveHeight(25), borderBottomWidth: 1}} className='px-4 py-2 bg-white border-[#EEE]'>
        <Text>Speed limit below 55 mph</Text>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <View className='flex-row items-center space-x-2'>
                <Checkebox type='rounded' isChecked={check} color='blue' />
                <Text> 3 mph</Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <Checkebox type='rounded' isChecked={check} color='blue' />
                <Text> 5 mph</Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <Checkebox type='rounded' isChecked={check} color='blue' />
                <Text> 7 mph</Text>
            </View>
        </View>
     </View>
     <View style={{height: Responsiveness.getResponsiveHeight(25), borderBottomWidth: 1}} className='px-4 py-2 bg-white border-[#EEE]'>
        <Text>Speed limit below 55 mph</Text>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <View className='flex-row items-center space-x-2'>
                <Checkebox type='rounded' isChecked={check} color='blue' />
                <Text> 3 mph</Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <Checkebox type='rounded' isChecked={check} color='blue' />
                <Text> 5 mph</Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <Checkebox type='rounded' isChecked={check} color='blue' />
                <Text> 7 mph</Text>
            </View>
        </View>
     </View>
    </View>
  )
}

export default SpeedLimitScreen