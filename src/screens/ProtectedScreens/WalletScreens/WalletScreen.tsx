import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../widget/Header'
import { Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import Responsiveness from '../../../helpers/Responsiveness';
import { useNavigation } from '@react-navigation/native';
import BalanceCard from '../../../component/Wallet/BalanceCard';
import PayoutItems from '../../../component/Wallet/PayoutItems';

const WalletScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white'>
      <Header type='Close-Children' children={"Wallet"}/>
      <View className='px-4'>
        <BalanceCard />
        <View style={{marginTop: Responsiveness.getResponsiveHeight(4)}} className='flex flex-row items-center justify-between'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Recent Payouts</Text>
            <Text className='text-blue-500'>See all</Text>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <PayoutItems amount={"$210.45"} date={"Apr 01, 2024"}/>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='py-5 border-b-[1.5px] border-[#EEEE]'>
            <TouchableOpacity onPress={()=> navigation.navigate("payment-method")} className='flex flex-row items-center space-x-2'>
                <Ionicons name="card" size={24} color="black" />
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Payments Methods</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center space-x-2'>
            <AntDesign name="questioncircle" size={24} color="black" />
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}}>Help</Text>
        </View>
      </View>
    </View>
  )
}

export default WalletScreen