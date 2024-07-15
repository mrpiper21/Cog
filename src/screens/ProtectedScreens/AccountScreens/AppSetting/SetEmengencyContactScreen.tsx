import { View, Text, Image } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const SetEmengencyContactScreen = () => {
    const navigation = useNavigation() as any
  return (
    <View className='flex-1 bg-white px-4 justify-between pb-4'>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(10)}}>
            <View className='flex items-center'>
                <Image source={require("../../../../../assets/icons/settings/e-person.png")}/>
            </View>
            <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='flex space-y-2'>
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Set an Emergency Contact</Text>
                <Text>Glopilots will call them if a safety incident has been
                reported and you’re not able to be reached.</Text>
            </View>
        </View>
        <View className='item-center'>
            <Btn type='action' label={"Set Up"} callback={()=> navigation.navigate("contact")}/>
        </View>
    </View>
  )
}

export default SetEmengencyContactScreen