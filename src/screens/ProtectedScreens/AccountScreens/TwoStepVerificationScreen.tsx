import { View, Text, Image } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import Btn from '../../../widget/Btn'

const TwoStepVerificationScreen = () => {
  return (
    <View className='flex-1 bg-white px-4 justify-between mb-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(4)}} className='flex items-center'>
        <View className='bg-slate-200 flex items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(40), width: Responsiveness.getResponsiveWidth(40)}}>
            <Image source={require("../../../../assets/icons/PhoneSecure.png")}/>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(3)}} className='items-center space-y-2'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Security beyond your password</Text>
            <Text>To keep your account more secure, we’ll ask you for
            you password and verification code at sign-in.</Text>
        </View>
      </View>
      <View className='items-center'>
        <Btn type='action' label={"Set up now"} />
      </View>
    </View>
  )
}

export default TwoStepVerificationScreen