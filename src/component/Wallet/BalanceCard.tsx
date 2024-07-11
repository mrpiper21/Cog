import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../helpers/Responsiveness'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const BalanceCard = () => {
    const navigation = useNavigation() as any;
  return (
    <View style={{height: Responsiveness.getResponsiveHeight(24), marginTop: Responsiveness.getResponsiveWidth(5)}} className='flex'>
            <View className='bg-[#ECEFFD] p-3 rounded-2xl justify-evenly pb-12' style={{height: Responsiveness.getResponsiveHeight(20)}}>
                <Text>Balance</Text>
                <View className='flex flex-row items-center justify-between'>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(6), fontWeight: '700'}}>$310.50</Text>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
                <Text>Payout scheduled: May 02</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("cashout")} style={{width: Responsiveness.getResponsiveWidth(32), height: Responsiveness.getResponsiveWidth(13)}} className='absolute flex-row items-center justify-center bg-[#4460EF] rounded-full space-x-1 bottom-1 left-1/3'>
                <MaterialCommunityIcons name="lightning-bolt" size={30} color="white" />
                <Text className='text-white'>Chash out</Text>
            </TouchableOpacity>
        </View>
  )
}

export default BalanceCard