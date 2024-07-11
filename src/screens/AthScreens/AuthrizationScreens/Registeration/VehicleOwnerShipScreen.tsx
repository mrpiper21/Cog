import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const VehicleOwnerShipScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
        <Header type='Back-Button'/>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(3)}}>
        <ProgressBar />
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(7)}} className='flex items-center space-y-3'>
        <Image source={require("../../../../../assets/icons/cars-icon.png")}/>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Personal Car</Text>
        <Text>Drive with a personal or livery vehicle. Heads up:
            Your vehicle must be 2003 or newer and have a
            minimum of 4 doors and 5 seatbelts.
        </Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(8), }} className='items-center'>
        <Btn type='action' label={"Use personal car"} callback={()=> navigation.navigate("addCar-details")} />
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(10)}} className='flex items-center space-y-3'>
        <Image source={require("../../../../../assets/icons/cars-icon2.png")}/>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Get a Car</Text>
        <Text>Get an affordable, insured rental cars you can use 
            to drive with GloPilots, with other companies or 
            just for personal use. Starting from "$200-$400".
        </Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(8), }} className='items-center'>
        <Btn type='action' label={"Use personal car"} />
      </View>
    </View>
  )
}

export default VehicleOwnerShipScreen