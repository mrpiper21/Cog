import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../helpers/Responsiveness'
import { Ionicons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

interface PayoutProps {
    amount: String,
    date: String,
}

const PayoutItems: React.FC<PayoutProps> = ({amount, date}) => {
  return (
    <>
        <View style={{height: Responsiveness.getResponsiveHeight(15)}} className='flex border-2 border-[#F5F5F5] justify-center p-3 rounded-t-xl space-y-1'>
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.7), fontWeight: '500'}}>{amount}</Text>
                <View className='flex flex-row justify-between items-center'>
                    <Text>Initiated {date}</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
                <View style={{height: Responsiveness.getResponsiveWidth(8), width: Responsiveness.getResponsiveWidth(30)}} className='flex flex-row items-center justify-center bg-[#EEEE] rounded-lg space-x-1'>
                    <FontAwesome6 name="calendar-week" size={17} color="black" />
                    <Text>Weekly payment</Text>
                </View>
            </View>
            <View style={{height: Responsiveness.getResponsiveHeight(15)}} className='flex border-b-2 border-x-2 border-[#F5F5F5] justify-center p-3 rounded-b-xl space-y-1'>
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.7), fontWeight: '500'}}>{amount}</Text>
                <View className='flex flex-row justify-between items-center'>
                    <Text>Initiated {date}</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
                <View style={{height: Responsiveness.getResponsiveWidth(8), width: Responsiveness.getResponsiveWidth(30)}} className='flex flex-row items-center justify-center bg-[#EEEE] rounded-lg space-x-1'>
                    <FontAwesome6 name="calendar-week" size={17} color="black" />
                    <Text>Weekly payment</Text>
                </View>
            </View>
    </>
  )
}

export default PayoutItems