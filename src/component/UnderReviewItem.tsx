import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../helpers/Responsiveness'
import { AntDesign, Ionicons } from '@expo/vector-icons'

interface Props {
    title: String
    text?: String
}

const UnderReviewItem: React.FC<Props> = ({title, text}) => {
  return (
    <View className='flex flex-row items-start justify-between'>
        <View className='flex flex-row items-center'>
            <AntDesign style={{marginRight: Responsiveness.getResponsiveWidth(2)}} name="clockcircle" size={35} color="gray" />
                <View>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.1), fontWeight: '500'}}>{title}</Text>
                    <Text>Under review</Text>
                </View>
            </View>
        <Ionicons name="chevron-forward" size={24} color="black" />
    </View>
  )
}

export default UnderReviewItem