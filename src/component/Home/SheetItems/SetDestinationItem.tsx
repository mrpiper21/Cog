import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Btn from '../../../widget/Btn';

const SetDestinationItem = () => {
  return (
    <View className='px-4'>
      <View style={{borderBottomWidth: 1, borderColor: 'lightgray', paddingBottom: Responsiveness.getResponsiveHeight(2.5)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(5.5), fontWeight: "400"}}>Purdue Ave</Text>
        <Text>Destination 2 remaining</Text>
      </View>
      <View className='flex-row items-center justify-between'>
         <View className='flex-row items-center space-x-4'>
            <MaterialIcons name="refresh" size={Responsiveness.getResponsiveWidth(8)} color="black" />
            <View>
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '500'}}>Arrive by</Text>
                <Text>ASP</Text>
            </View>
         </View>
         <TouchableOpacity className='items-center justify-center rounded-full' style={{marginVertical: Responsiveness.getResponsiveHeight(3), height: Responsiveness.getResponsiveWidth(8), width: Responsiveness.getResponsiveWidth(8), borderWidth: 1, borderColor: 'lightgray'}}>
            <MaterialIcons name="mode-edit" size={24} color="black" />
         </TouchableOpacity>
      </View>
      <View>
        <Btn type='action' label={"SET DESTINATION"}/>
      </View>
    </View>
  )
}

export default SetDestinationItem