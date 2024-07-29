import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import DropdownInput from '../../../widget/DropdownInput'
import Btn from '../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const AddVehicleScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='flex space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Vehicle Requirements</Text>
        <Text>To drive with Glopilots, your vehicle must be from
            2012 or a newer model that is not salvaged. Explore
            the eligible vehicle makes and models approved for
            driving with Glopilots in your city.
            </Text>
      </View>
      <Text style={{marginVertical: Responsiveness.getResponsiveHeight(2), fontSize: Responsiveness.getResponsiveWidth(3.3), fontWeight: '700'}}>Vehicle Information</Text>
      <DropdownInput placeholder='Select Make' label={"Make"}/>
      <DropdownInput placeholder='Select Model' label={"Model"}/>
      <DropdownInput placeholder='Select Year' label={"Year"}/>
      <DropdownInput placeholder='Enter License plate number ' label={"License plate number"}/>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(3), alignItems: 'center'}}>
        <Btn type='action' label={"Continue"}/>
      </View>
    </View>
  )
}

export default AddVehicleScreen