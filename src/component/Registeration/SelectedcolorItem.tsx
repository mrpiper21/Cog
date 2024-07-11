import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../helpers/Responsiveness'
import { Feather } from '@expo/vector-icons';

interface selectedColorProps {
    data: any
    selectedColor: String
    callback: (value: String)=> void
}

const SelectedcolorItem: React.FC<selectedColorProps> = ({data, selectedColor, callback}) => {
  return (
    <View
    key={data.name}
    style={{ paddingVertical: Responsiveness.getResponsiveWidth(1), borderBottomWidth: 2, borderColor: '#EEEE' }}
    className='flex flex-row items-center justify-between'
  >
    <TouchableOpacity className='flex flex-row items-center space-x-3' onPress={() => callback(data.name)}>
      <View
        style={{
          height: Responsiveness.getResponsiveWidth(13),
          width: Responsiveness.getResponsiveWidth(13),
          backgroundColor: data.value,
        }}
        className={`rounded-full ${data.name === 'White' && 'border-[.05px] border-gray-500'}`}
      />
      <Text style={{ fontSize: Responsiveness.getResponsiveWidth(4), color: selectedColor === data.name ? "blue" : "black" }}>{data.name}</Text>
    </TouchableOpacity>
    {selectedColor === data.name && <Feather name="check" size={24} color="blue" />}
  </View>
  )
}

export default SelectedcolorItem