import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const AddPaymentScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
       <View className='flex flex-row items-center justify-between py-4 mt-3'>
        <TouchableOpacity onPress={()=> navigation.navigate("add-card")} className='flex flex-row items-center space-x-3'>
          <View style={{height: Responsiveness.getResponsiveWidth(13), width: Responsiveness.getResponsiveWidth(13)}} className='rounded-full items-center justify-center bg-blue-100'>
          <Fontisto name="credit-card" size={20} color="blue" />
            </View>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.4), fontWeight: '700'}}>Credit/Debit Card</Text>
          </TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </View>
  )
}

export default AddPaymentScreen