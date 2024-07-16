import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import Btn from '../../../widget/Btn';

const ReferralScreen = () => {
  return (
    <View className='flex-1'>
        <View className='bg-white p-4'>
            <View className='items-center'>
                <Image source={require("../../../../assets/share1.png")}/>
            </View>
            <View style={{marginTop: Responsiveness.getResponsiveHeight(3)}} className='flex items-center'>
                <View className='flex-row'>
                    <View style={{paddingRight: Responsiveness.getResponsiveWidth(18), borderRightWidth: 1.5}} className='items-center border-[#EEEE]'>
                        <Text style={{fontSize: Responsiveness.getResponsiveWidth(6), fontWeight: '700'}}>2</Text>
                        <Text>Requests</Text>
                    </View>
                    <View style={{paddingLeft: Responsiveness.getResponsiveWidth(18)}} className='items-center'>
                        <Text style={{fontSize: Responsiveness.getResponsiveWidth(6), fontWeight: '700'}}>$130</Text>
                        <Text>Earned</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: Responsiveness.getResponsiveHeight(4)}} className='items-center'>
                <TouchableOpacity className='items-center justify-center rounded-xl border-[#4460EF]' style={{height: Responsiveness.getResponsiveWidth(15), width: Responsiveness.getResponsiveWidth(95), borderWidth: 1.5}}>
                    <Text className='text-[#4460EF]'>Check invitation progress</Text>
                </TouchableOpacity>
            </View>
        </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(1.5)}} className='px-4 bg-white'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(5), fontWeight: '700'}}>You can earn up to $300 for every
        friend you invite</Text>
        <View style={{marginTop: Responsiveness.getResponsiveWidth(2)}} className='flex flex-row '>
            <View className='items-center'>
                <View className='items-center justify-center bg-[#4460EF] rounded-full' style={{height: Responsiveness.getResponsiveWidth(12), width: Responsiveness.getResponsiveWidth(12)}}>
                    <FontAwesome6 name="gift" size={24} color="white" />
                </View>
                <View className='bg-[#4460EF]' style={{height: Responsiveness.getResponsiveHeight(9), width: 1.5}} />
                <View className='items-center justify-center bg-[#4460EF] rounded-full' style={{height: Responsiveness.getResponsiveWidth(12), width: Responsiveness.getResponsiveWidth(12)}}>
                    <FontAwesome6 name="user-check" size={24} color="white" />
                </View>
                <View className='bg-[#4460EF]' style={{height: Responsiveness.getResponsiveHeight(6), width: 1.5}} />
                <View className='items-center justify-center bg-[#4460EF] rounded-full' style={{height: Responsiveness.getResponsiveWidth(12), width: Responsiveness.getResponsiveWidth(12)}}>
                <FontAwesome5 name="car" size={24} color="white" />
                </View>
            </View>
            <View className='justify-between' style={{marginLeft: Responsiveness.getResponsiveWidth(3)}}>
                <View className='space-y-1'>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Share your referral link</Text>
                    <Text>You can invite your friends who are new
                    to Glopilots.</Text>
                </View>
                <View>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(4)}}>Your friend activates their account</Text>
                </View>
                <View style={{width: Responsiveness.getResponsiveWidth(80)}}>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Get $30 for every 10 rides your friend
                    completes</Text>
                </View>
            </View>
        </View>
        <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='items-center'><Btn type='action' label={"Invite Friends"}/></View>
      </View>
    </View>
  )
}

export default ReferralScreen