import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native'

const RegisterEmail = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View className='mt-4'>
            <Header type='Back-Button' />
        </View>
      <Text className='text-lg font-bold my-4'>What's your phone number or email?</Text>
      <View>
        <InputTextItem placeHolderText='Enter email or phone number'/>
      </View>
      <View className='flex space-y-6 mt-6'>
        <Text>
            By proceeding, you consent to get call, Whatsapp or
            SMS
            messages, including by automated means, from
            GloPilots
            and its affiliates to the number provided.
        </Text>
        <View className='items-center'>
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("otp-verification")}/>
        </View>
      </View>
      <View className='flex flex-row items-center justify-center my-8'>
            <View style={{backgroundColor: 'black', height: 1, width: wp(30)}} />
            <Text className='mx-2'>or continue with</Text>
            <View style={{backgroundColor: 'black', height: 1, width: wp(30)}} />
        </View>
        <View className='flex items-center space-y-4'>
            <TouchableOpacity style={{width: wp(90), height: wp(14)}} className='flex flex-row items-center justify-center space-x-3 bg-[#EEEE] rounded-lg'>
                <Image source={require("../../../../../assets/icons/GoogleIcon.png")} />
                <Text>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: wp(90), height: wp(14)}} className='flex flex-row items-center justify-center space-x-3 bg-[#EEEE] rounded-lg'>
                <Image source={require("../../../../../assets/icons/AppleIcon.png")} />
                <Text>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: wp(90), height: wp(14)}} className='flex flex-row items-center justify-center space-x-3 bg-[#EEEE] rounded-lg'>
                <Image source={require("../../../../../assets/icons/FacebookIcon.png")} />
                <Text>Continue with Facebook</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default RegisterEmail