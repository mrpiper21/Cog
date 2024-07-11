import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../widget/Header'
import AccountItemData from '../../../Mock/AccountItemData'
import { Ionicons } from '@expo/vector-icons';
import Responsiveness from '../../../helpers/Responsiveness';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white'>
        <Header type='Close-Children' children={"Account"}/>
        <TouchableOpacity onPress={()=> navigation.navigate("vehicles")} style={{marginTop: Responsiveness.getResponsiveHeight(1), paddingVertical: Responsiveness.getResponsiveHeight(3), borderBottomWidth: 5,  borderColor: '#EEEE'}} className='flex flex-row item-center justify-between px-4'>
          <View className='flex flex-row items-center'>
            <Image style={{marginRight: Responsiveness.getResponsiveWidth(2)}} source={require("../../../../assets/carRMV-img.png")} />
            <View className='flex'>
              <Text>Vehicle</Text>
              <Text>Kia Sportage 5GIT444</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      {AccountItemData.map((data)=> (
        <View className='flex flex-row items-center justify-between px-4 py-5 border-b-[1px] border-gray-300'>
            <View className='flex flex-row space-x-3 items-center'>
                <View>{data.iconLeft}</View>
                <Text className={`${data.name === "Logout" && "text-red-500 font-semibold"}`}>{data.name}</Text>
            </View>
            <View>{data.iconRight}</View>
        </View>
      ))}
    </View>
  )
}

export default AccountScreen