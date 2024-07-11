import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const RegisterFullName = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
            <Header type='Back-Button'/>
        </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(3)}}>
        <Text style={{fontWeight: '800', fontSize: Responsiveness.getResponsiveWidth(5)}}>What is your first & last name?</Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}} className='flex space-y-4'>
        <View>
            <InputTextItem placeHolderText='Enter first name' />
        </View>
        <View>
            <InputTextItem placeHolderText='Enter last name' />
        </View>
        <View>
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("account-type")} />
        </View>
      </View>
    </View>
  )
}

export default RegisterFullName