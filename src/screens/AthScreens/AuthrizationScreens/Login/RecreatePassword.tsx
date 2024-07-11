import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'

const RecreatePassword = () => {
  return (
    <View className='flex flex-1 bg-white px-4'>
        <Header type='Back-Button'/>
      <View className='mt-6'>
        <Text className='font-bold text-lg'>Create new password</Text>
        <Text>Your password must be at least 8 characters long,
        and contain at least one letter and one digit</Text>
        <View className='flex space-y-4 mt-5'>
            <View>
                <InputTextItem placeHolderText='Enter new password' />
            </View>
            <View>
                <InputTextItem placeHolderText='Confirm new password' />
            </View>
        </View>
        <View className='flex items-center mt-5'>
            <Btn type='action' label={"Save Password"} />
        </View>
      </View>
    </View>
  )
}

export default RecreatePassword