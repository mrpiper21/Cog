import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'
import Responsiveness from '../../../../helpers/Responsiveness'
import { useNavigation } from '@react-navigation/native'

const InputDriveLocation = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Header type='Back-Button' />
      </View>
      <ProgressBar />

      <View className='flex space-y-5'>
        <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(5)}}>Where you want to drive?</Text>
        <View>
            <InputTextItem placeHolderText='Select a city'/>
        </View>
        <View className='items-center'>
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("vehicle-type")}/>
        </View>
      </View>
    </View>
  )
}

export default InputDriveLocation