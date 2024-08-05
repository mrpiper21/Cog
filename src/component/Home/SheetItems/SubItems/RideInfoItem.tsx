import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'

const RideInfoItem = () => {
  return (
    <View style={{marginHorizontal: Responsiveness.getResponsiveWidth(15)}}>
      <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(3.5)}}>6 mins 3.2 mil</Text>
      <Text>Picking up Femi</Text>
    </View>
  )
}

export default RideInfoItem