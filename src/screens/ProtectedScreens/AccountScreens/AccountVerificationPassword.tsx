import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import InputTextItem from '../../../widget/InputTextItem'
import CancelBtn from '../../../widget/Buttons/CancelBtn'

const AccountVerificationPassword = () => {
  return (
    <View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(5)}} className='justify-end px-4'><CancelBtn /></View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(5)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Welcome back, Femi</Text>
        <Text>Please enter your password to turn on 2-Step Verification.</Text>
        <View className='items-center'>
          <InputTextItem placeHolderText='Enter your password' />
        </View>
        <View className='justify-end'>
          <Text className='text-blue-600'>forgot password?</Text>
        </View>
      </View>
    </View>
  )
}

export default AccountVerificationPassword