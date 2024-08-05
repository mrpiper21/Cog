import { View, Text } from 'react-native'
import React from 'react'
import RideInfoItem from './SubItems/RideInfoItem'
import ToggleActiveUserItem from './ToggleActiveUserItem'
import ClientItem from './ClientItem'


const StartRideItem = () => {
  return (
    <View>
        <ToggleActiveUserItem type='info'/>
        <ClientItem />
    </View>
  )
}

export default StartRideItem