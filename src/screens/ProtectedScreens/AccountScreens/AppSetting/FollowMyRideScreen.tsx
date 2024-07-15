import { View, Text, Image } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import Btn from '../../../../widget/Btn'

const FollowMyRideScreen = () => {
  return (
    <View className='flex-1 bg-white justify-between pb-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(12)}}>
        <Image source={require("../../../../../assets/icons/settings/OBJECTS.png")}/>
        <View className='space-y-2 px-4 mt-7'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Follow My Ride</Text>
            <Text>Easily share location and trips status with friends
            and family.</Text>
        </View>
      </View>
      <View className='items-center'>
        <Btn type='action' label={"Set up"}/>
      </View>
    </View>
  )
}

export default FollowMyRideScreen