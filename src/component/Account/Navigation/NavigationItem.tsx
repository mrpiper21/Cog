import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import { useAppContext } from '../../../hooks/AppSettingContext'

interface NavigationProps {
    title: String,
    text: String,
    rightNode?: React.ReactNode | any
    type: "mapItems" | "checksettings"
}

const NavigationItem: React.FC<NavigationProps> = ({title, text, rightNode, type}) => {
  const Settings = useContext(useAppContext)
  return (
    <>
        { type=== "mapItems" ? <View style={{borderBottomWidth: 1, paddingVertical: Responsiveness.getResponsiveHeight(1.5)}} className='px-4 border-[#EEE]'>
        <TouchableOpacity onPress={()=> {
          Settings?.setActiveNavigationIem(title)
          console.log("isActive...", Settings?.activeNavigationItem)
        }} className='flex flex-row items-center justify-between'>
          <View className='space-y-1'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '500'}}>{title}</Text>
            <Text>{text}</Text>
          </View>
          {Settings?.activeNavigationItem=== title && <View>{rightNode}</View>}
        </TouchableOpacity>
    </View> : <View style={{borderBottomWidth: 1, paddingVertical: Responsiveness.getResponsiveHeight(1.5)}} className='px-4 border-[#EEE]'>
        <View className='flex flex-row items-center justify-between'>
          <View className='space-y-1'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '500'}}>{title}</Text>
            <View style={{width: Responsiveness.getResponsiveWidth(80)}}><Text>{text}</Text></View>
          </View>
          <View>{rightNode}</View>
        </View>
    </View>}
    </>
  )
}

export default NavigationItem