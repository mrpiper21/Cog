import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const DriverMarker = ({coordinate }: any) => {
  return (
    <Animatable.View animation="fadeIn" duration={1000} delay={200}>
      <Image source={require("../../assets/userNavigator.png")} resizeMode='contain'/>
    </Animatable.View>
  )
}

export default DriverMarker