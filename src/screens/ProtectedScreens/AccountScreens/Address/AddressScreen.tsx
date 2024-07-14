import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import InputTextItem from '../../../../widget/InputTextItem'
import DropdownInput from '../../../../widget/DropdownInput'
import Btn from '../../../../widget/Btn'

const AddressScreen = () => {
  return (
    <View className='flex-1 bg-white px-4'>
      <Text style={{fontSize: Responsiveness.getResponsiveHeight(2.5), fontWeight: '800'}}>Edit Address</Text>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Address 1</Text>
        <View><InputTextItem placeHolderText='Address 1'/></View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Address 2</Text>
        <View><InputTextItem placeHolderText='Address 2'/></View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>city</Text>
        <View><InputTextItem placeHolderText='Select City'/></View>
      </View>
      <View>
        <View>
            <DropdownInput placeholder='Select State' label={'State'} />
        </View>
        <View>
            <DropdownInput placeholder='Select Zip' label={'Zip'} />
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(12)}} className='items-center'>
        <Btn type='action' label={"Save"} />
      </View>
    </View>
  )
}

export default AddressScreen