import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const ButtonLoader: React.ReactNode = <LottieView
style={{
  width: 70,
  height: 70,
}}
source={require("./../../assets/loaders/ButtonLoader.json")}
autoPlay
loop
/>

export default ButtonLoader


export const Apploader = ()=> {
  return (<View><LottieView
    style={{
      width: 70,
      height: 70,
    }}
    source={require("./../../assets/loaders/ButtonLoader.json")}
    autoPlay
    loop
    /></View>)
}