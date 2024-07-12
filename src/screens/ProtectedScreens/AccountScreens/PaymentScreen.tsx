import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import Btn from '../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const PaymentScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700', marginVertical: Responsiveness.getResponsiveHeight(2)}}>Payout</Text>
      <View>
        <View className='flex flex-row items-center justify-between py-4 border-b-[2px] border-[#EEEE]'>
            <View className='flex flex-row items-center space-x-3'>
                <View style={{height: Responsiveness.getResponsiveWidth(13), width: Responsiveness.getResponsiveWidth(13)}} className='rounded-full items-center justify-center bg-blue-100'>
                    <MaterialCommunityIcons name="bank" size={30} color="blue" />
                </View>
                <View>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.4), fontWeight: '700'}}>Bank account - 8789</Text>
                    <Text className='text-slate-600'>Earnings paid out weekly</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
        <Text style={{marginVertical: Responsiveness.getResponsiveHeight(1.5)}}>A week runs from Monday at 4:00 AM to the following Monday at 3: 59 AM. All rides during that time period will count towards that weeks pay period. Learn more</Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Linked Payment Methods</Text>
      </View>
      <View className='flex flex-row items-center justify-between py-4 border-b-[2px] border-[#EEEE]'>
        <View className='flex flex-row items-center space-x-3'>
          <View style={{height: Responsiveness.getResponsiveWidth(13), width: Responsiveness.getResponsiveWidth(13)}} className='rounded-full items-center justify-center bg-blue-100'>
            <MaterialCommunityIcons name="bank" size={30} color="blue" />
              </View>
              <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.4), fontWeight: '700'}}>Bank account - 8789</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
      <View className='flex items-center mt-4'>
            <Btn type='cancel' label={"Add Payment Method"} callback={()=> navigation.navigate("add-payment")}/>
      </View>
    </View>
  )
}

export default PaymentScreen