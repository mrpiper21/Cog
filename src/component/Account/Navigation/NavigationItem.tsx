import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import { useAppContext } from '../../../hooks/AppSettingContext'
import SwitchItem from '../../SwitchItem'

interface NavigationProps {
    title: String,
    text: String,
    rightNode?: React.ReactNode | any
}

const NavigationItem: React.FC<NavigationProps> = ({title, text, rightNode}) => {
  const Settings = useContext(useAppContext)
  return (
    <>
        <View style={{borderBottomWidth: 1, paddingVertical: Responsiveness.getResponsiveHeight(1.5)}} className='px-4 border-[#EEE]'>
        <TouchableOpacity onPress={()=> {
          Settings?.setActiveNavigationItem(title)
          console.log("isActive...", Settings?.activeNavigationItem)
          }} className='flex flex-row items-center justify-between'>
          <View className='space-y-1'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '500'}}>{title}</Text>
            <Text>{text}</Text>
          </View>
          {Settings?.activeNavigationItem=== title && <View>{rightNode}</View>}
        </TouchableOpacity>
    </View>
    </>
  )
}

export default NavigationItem