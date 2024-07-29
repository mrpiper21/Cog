import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import UnderReviewItem from '../../../component/UnderReviewItem'

const RemoveVehicleAccountScreen = () => {
  return (
    <View className='flex flex-1 bg-white px-4 justify-between mb-4'>
      <View>
        <View className='space-y-2' style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Kia Sportage (SUV)</Text>
            <Text>Please provide the required documents for this
            vehicle.</Text>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <UnderReviewItem title={"Registration Certificate (RC)"} text={"Under review"} />
        </View>
      </View>
      <View className='flex items-center'>
        <TouchableOpacity className='border-[2px] border-red-600 rounded-lg items-center justify-center' style={{width: Responsiveness.getResponsiveWidth(90), height: Responsiveness.getResponsiveWidth(12)}}><Text className='text-red-600'>Remove Vehicle</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default RemoveVehicleAccountScreen