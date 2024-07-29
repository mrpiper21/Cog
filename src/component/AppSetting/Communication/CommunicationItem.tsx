import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import Radio from '../../Radio'
import { useAppContext } from '../../../hooks/AppSettingContext'

interface CommunicationItemProps {
    icon?: React.ReactNode,
    label: String,
    value: string
}

const CommunicationItem: React.FC<CommunicationItemProps> = ( {icon, label, value}) => {
    const AppSetting = useContext(useAppContext)
  return (
    <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}} className='flex flex-row items-center justify-between px-4 border-[#EEEE]'>
        <View className='flex flex-row items-center'>
            {icon}
            <View className='space-y-1'>
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Call or chat</Text>
                <Text>Recommeded</Text>
            </View>
        </View>
        <Radio onChange={AppSetting?.setActiveCommunicationSetting} checkedValue={AppSetting?.activeCommunicationSetting} value={value} />
      </View>
  )
}

export default CommunicationItem