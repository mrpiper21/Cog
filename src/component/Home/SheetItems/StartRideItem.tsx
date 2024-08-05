import { View, Text } from 'react-native'
import React from 'react'
import RideInfoItem from './SubItems/RideInfoItem'
import ToggleActiveUserItem from './ToggleActiveUserItem'
import ClientItem from './ClientItem'
// import Swipeable from 'react-native-swipeable';


const StartRideItem = () => {
  return (
    <View>
        <ToggleActiveUserItem type='info'/>
        <ClientItem />
    </View>
  )
}

export default StartRideItem