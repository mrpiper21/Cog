import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const CreatenewPassword = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <View className='mt-4'>
            <Header type='Back-Button' />
        </View>
      <Text className='text-lg font-bold my-4'>Create your password</Text>
      <View className='flex space-y-6 mt-1'>
        <Text>
        Your password must be at least 8 characters long,
        and contain at least one letter and one digit
        </Text>
        <View>
        <InputTextItem placeHolderText='Enter your password'/>
      </View>
        <View className='items-center'>
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("register-name")}/>
        </View>
    </View>
    </View>
  )
}

export default CreatenewPassword