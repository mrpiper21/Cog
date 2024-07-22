import { View, Text, TextInput, Alert } from 'react-native'
import React, {useContext, useState} from 'react'
import Header from '../../../../widget/Header'
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Btn from '../../../../widget/Btn';
import OtpInput from 'react-native-animated-otp-input';
import { useUserContext } from '../../../../hooks/Usercontext/UserContext';

const OTPVerificationScren = () => {
    const navigation = useNavigation() as any;
    const User = useContext(useUserContext)
    const [inputOnActive, setInputOnActive] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false
    })
  return (
    <View className='flex flex-1 bg-white px-4'>
    <View className='w-[95%] mt-6'>
        <Text className='font-bold text-lg'>Verification Code</Text>
        <Text>We sent you the 4-digit code at 
            <Text className='font-bold'> {User?.user.email}</Text>. Please enter the code
            below to verify your account.
        </Text>
      </View>
      <View style={{marginTop: wp(1)}} className='flex items-center justify-center'>
        <OtpInput
          otpCount={4}
          autoFocus={false}
          onCodeFilled={(code: number) => {
            Alert.alert('Notification', `OTP is ${code}`);
          }}
          onCodeChanged={(codes: number) => {
            console.log({ codes });
          }}
        />
      </View>
      <View className='items-center mt-6 space-y-6'>
        <Text>Don't get a code? <Text className='text-blue-800'>Resend</Text></Text>
        <View>
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("submit-email")}/>
        </View>
      </View>
    </View>
  )
}

export default OTPVerificationScren