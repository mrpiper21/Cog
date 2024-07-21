import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../helpers/Responsiveness'
import { Feather } from '@expo/vector-icons';
import { ColorType } from '../../screens/AthScreens/AuthrizationScreens/Registeration/SelectColorScreen';

interface selectedColorProps {
    data: any
    selectedColor: String
    callback: (value: String, data?: any)=> void
}

const SelectedcolorItem: React.FC<selectedColorProps> = ({data, selectedColor, callback}) => {
  return (
    <TouchableOpacity
    onPress={() => callback(data.name, data)}
    key={data.name}
    style={{ paddingVertical: Responsiveness.getResponsiveWidth(1), borderBottomWidth: 2, borderColor: '#EEEE' }}
    className='flex flex-row items-center justify-between'
  >
    <View className='flex flex-row items-center space-x-3'>
      <View
        style={{
          height: Responsiveness.getResponsiveWidth(13),
          width: Responsiveness.getResponsiveWidth(13),
          backgroundColor: data.value,
        }}
        className={`rounded-full ${data.name === 'White' && 'border-[.05px] border-gray-500'}`}
      />
      <Text style={{ fontSize: Responsiveness.getResponsiveWidth(4), color: selectedColor === data.name ? "blue" : "black" }}>{data.name}</Text>
    </View>
    {selectedColor === data.name && <Feather name="check" size={24} color="blue" />}
  </TouchableOpacity>
  )
}

export default SelectedcolorItem