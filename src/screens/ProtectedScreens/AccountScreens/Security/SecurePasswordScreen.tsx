import { View, Text } from 'react-native'
import React from 'react'
import InputTextItem from '../../../../widget/InputTextItem'
import Responsiveness from '../../../../helpers/Responsiveness'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const SecurePasswordScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View className='flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='space-y-4'>
        <Text>Password</Text>
        <View className='items-center'><InputTextItem placeHolderText='Enter your password'/></View>
        <Text>For your security, please enter your old password.</Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='items-center'>
        <Btn type='action' label={"Verify Password"} callback={()=> navigation.navigate("new-password")}/>
      </View>
    </View>
  )
}

export default SecurePasswordScreen