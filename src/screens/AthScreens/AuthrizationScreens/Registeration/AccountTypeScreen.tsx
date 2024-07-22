import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'
import { useUserContext } from '../../../../hooks/Usercontext/UserContext'
import Loading from '../../../../widget/Loading'

const AccountTypeScreen = () => {
    const navigation = useNavigation() as any;
    const [loading, setLoading] = useState<boolean>(false)
    const User = useContext(useUserContext)

    if(loading) return <Loading />    
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
            <Header type='Back-Button' />
        </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}} className='flex space-y-2'>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>What's your account type?</Text>
        <Text>Please tell us, how do you want to continue?</Text>
      </View>

      <View style={{gap: Responsiveness.getResponsiveWidth(3), marginTop: Responsiveness.getResponsiveWidth(5)}} className='flex'>
       <View style={{gap: Responsiveness.getResponsiveWidth(3)}} className='flex flex-row'>
            <TouchableOpacity onPress={()=> User?.updateUserProfile({userType: "driver"}, setLoading, 'user update successfully. You are welcome as a Driver')} style={{width: Responsiveness.getResponsiveWidth(45),borderWidth: 1, borderColor: '#EEEE'}} className='rounded-lg'>
                <View className='flex items-center bg-blue-50'>
                    <Image source={require("../../../../../assets/icons/DriverSVG.png")}/>
                </View>
                <View className='p-4 bg-white items-center'>
                        <Text>Driver</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: Responsiveness.getResponsiveWidth(45),borderWidth: 1, borderColor: '#EEEE'}} className='rounded-lg'>
                <View className='flex items-center bg-blue-50'>
                    <Image source={require("../../../../../assets/icons/vendorSVG.png")}/>
                </View>
                <View className='p-4 bg-white items-center'>
                    <Text>Vendor</Text>
                </View>
            </TouchableOpacity>
       </View>
       <View style={{gap: Responsiveness.getResponsiveWidth(3)}} className='flex flex-row'>
            <TouchableOpacity style={{width: Responsiveness.getResponsiveWidth(45),borderWidth: 1, borderColor: '#EEEE'}} className='rounded-lg'>
                <View className='flex items-center bg-blue-50'>
                    <Image source={require("../../../../../assets/icons/HospitalitySVG.png")}/>
                </View>
                <View className='p-4 bg-white items-center'>
                        <Text>Hospitality</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: Responsiveness.getResponsiveWidth(45),borderWidth: 1, borderColor: '#EEEE'}} className='rounded-lg'>
                <View className='flex items-center bg-blue-50'>
                    <Image source={require("../../../../../assets/icons/carOwnerSVG.png")}/>
                </View>
                <View className='p-4 bg-white items-center'>
                    <Text>Car Owner</Text>
                </View>
            </TouchableOpacity>
       </View>
      </View>
      <View className='items-center absolute bottom-2 left-7'>
        <Btn type='action' label={"Next"} callback={()=> navigation.navigate("inputDriver-location")}/>
      </View>
    </View>
  )
}

export default AccountTypeScreen