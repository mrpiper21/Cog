import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const SubmitEmail = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <View className='mt-4'>
            <Header type='Back-Button' />
        </View>
      <Text className='text-lg font-bold my-4'>What's your email address?</Text>
      <View>
        <InputTextItem placeHolderText='Enter email address'/>
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
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("createnew-password")}/>
        </View>
    </View>
    </View>
  )
}

export default SubmitEmail