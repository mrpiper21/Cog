import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import Responsiveness from '../../../../helpers/Responsiveness'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const VehicleTypeScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Header type='Back-Button' />
      </View>
      <ProgressBar />
      <View>
        <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(5)}}>Choose how would you like to earn
        with Glopilots?</Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(4)}} className='flex items-center gap-4'>
        <TouchableOpacity className='p-4 space-y-3 rounded-lg' style={{width: Responsiveness.getResponsiveWidth(95), height: Responsiveness.getResponsiveWidth(20), borderWidth: 2, borderColor: "#EEEE"}}>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Car</Text>
            <Text>Drive a 4-doors vehicle on Glopilots</Text>
        </TouchableOpacity>
        <TouchableOpacity className='p-4 space-y-3 rounded-lg' style={{width: Responsiveness.getResponsiveWidth(95), height: Responsiveness.getResponsiveWidth(20), borderWidth: 2, borderColor: "#EEEE"}}>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Scooter</Text>
            <Text>Drive a 2 wheel vehicle on Glopilots</Text>
        </TouchableOpacity>
        <TouchableOpacity className='p-4 space-y-3 rounded-lg' style={{width: Responsiveness.getResponsiveWidth(95), height: Responsiveness.getResponsiveWidth(20), borderWidth: 2, borderColor: "#EEEE"}}>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Tri-cycle</Text>
            <Text>Drive a 3-wheels vehicle on Glopilots</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(28)}} className='items-center'>
        <Btn type='action' label={"Next"} callback={()=> navigation.navigate("driver-survey")} />
      </View>
    </View>
  )
}

export default VehicleTypeScreen