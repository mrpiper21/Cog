import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <Header type='Back-Button' />
      <View className='space-y-4 mt-7'>
        <Text className='text-lg font-bold'>Forgot your password?</Text>
        <TextInput style={{borderWidth: 1, borderColor: '#EEEE'}} className='p-4 rounded-lg' placeholder='Enter email address' />
      </View>
      <View className='mt-6'>
        <Btn type='action' label={"Send code"} callback={()=> navigation.navigate("send-code")}/>
      </View>
    </View>
  )
}

export default ForgotPassword