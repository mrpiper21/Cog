import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import {AntDesign, FontAwesome5} from '@expo/vector-icons';
import RouteItem from '../../../widget/RouteItem';
import Btn from '../../../widget/Btn';

const AccetRIdeItem = () => {
  return (
    <View style={{paddingHorizontal: Responsiveness.getResponsiveWidth(2)}}>
      <View className='flex-row justify-between items-center'>
        <View style={{height: Responsiveness.getResponsiveWidth(10), width: Responsiveness.getResponsiveWidth(27)}} className='bg-[#0D1317] items-center justify-center flex-row space-x-3 rounded-lg'>
            <FontAwesome5 name="user" size={Responsiveness.getResponsiveWidth(4)} color="white" />
            <Text className="text-white">GlopilotsX</Text>
        </View>
        <Text>15s</Text>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1, borderColor: 'lightgray'}} className='space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(5), fontWeight: '700'}}>$10</Text>
        <View className='flex-row items-center'>
            <AntDesign name="star" size={15} color="orange" />
            <Text>4.8</Text>
        </View>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1, borderColor: 'lightgray'}} className='flex-row'>
       <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
        <RouteItem />
       </View>
        <View style={{paddingLeft: Responsiveness.getResponsiveWidth(3)}} className='space-y-5'>
            <View>
                <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(3.5)}}>6 mins (3.2mi) away</Text>
                <Text>Fairlands Drive</Text>
            </View>
            <View>
                <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(3.5)}}>6 mins (3.2mi) away</Text>
                <Text>Fairlands Drive</Text>
            </View>
        </View>
      </View>
      <View style={{marginVertical: Responsiveness.getResponsiveHeight(2)}} className='items-center'>
        <Btn type='action' label={"ACCEPT"}/>
      </View>
    </View>
  )
}

export default AccetRIdeItem