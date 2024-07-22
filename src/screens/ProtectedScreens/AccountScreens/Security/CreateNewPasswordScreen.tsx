import { View, Text } from 'react-native'
import React from 'react'
import Btn from '../../../../widget/Btn'
import Responsiveness from '../../../../helpers/Responsiveness'
import InputTextItem from '../../../../widget/InputTextItem'

const CreateNewPasswordScreen = () => {
  return (
    <View className='flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='space-y-4'>
        <Text>Password</Text>
        <View className='items-center'><InputTextItem placeHolderText='Enter your new password'/></View>
        <Text>Secure password should be at least 8 character long and must include a number and a symbol.</Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='items-center'>
        <Btn type='action' label={"Update Password"}/>
      </View>
    </View>
  )
}

export default CreateNewPasswordScreen