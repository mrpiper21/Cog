import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import Colors from '../../../../Global/COLORS'
import { Feather } from '@expo/vector-icons';
import SelectedcolorItem from '../../../../component/Registeration/SelectedcolorItem';

const SelectColorScreen = () => {
    const [selectedColor, setSelectedColr] = useState<String>("");
    const handleColorPress = (colorName: String) => {
        setSelectedColr(colorName); // Update selected color
      };
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='flex flex-1 bg-white px-4'>
      <View className='space-y-2 pb-4' style={{ borderBottomWidth: 2, borderColor: '#EEEE' }}>
        <Text style={{ fontSize: Responsiveness.getResponsiveFontSize(0.8), fontWeight: '700' }}>
          Choose your vehicle color
        </Text>
        <Text>2022 Kia Sportage</Text>
      </View>
      {Colors.map((data) => (
        <SelectedcolorItem key={data.name} data={data} selectedColor={selectedColor} callback={handleColorPress} />
      ))}
    </ScrollView>
  )
}

export default SelectColorScreen