import { View, Text, ScrollView, TouchableOpacity, StyleProp } from 'react-native'
import React, { useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import Colors from '../../../../Global/COLORS'
import { Feather } from '@expo/vector-icons';
import SelectedcolorItem from '../../../../component/Registeration/SelectedcolorItem';
import Btn from '../../../../widget/Btn';
import { useNavigation } from '@react-navigation/native';

export type ColorType = {
  name: String,
  value: String
}

const SelectColorScreen = () => {
    const [selectedColor, setSelectedColor] = useState<String>("")
    const navigation = useNavigation() as any
    const [colorData, setColorData] = useState<{name: String, value: String}>()
    const handleColorPress = (color: String, data?: {name: String, value: String}) => {
      setSelectedColor(color);
      setColorData(data)
    };

      const handleButtonPress =()=> {
        if(selectedColor){
          navigation.navigate("addPersonalCar", {
            name: colorData?.name,
            value: colorData?.value
          } )
        }
      }
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='flex flex-1 bg-white px-4 h-[400px]'>
      <View className='space-y-2 pb-4' style={{ borderBottomWidth: 2, borderColor: '#EEEE' }}>
        <Text style={{ fontSize: Responsiveness.getResponsiveFontSize(0.8), fontWeight: '700' }}>
          Choose your vehicle color
        </Text>
        <Text>2022 Kia Sportage</Text>
      </View>
      {Colors.map((color) => (
        <SelectedcolorItem key={color.name} data={color} selectedColor={selectedColor} callback={handleColorPress} />
      ))}
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(4)}} className='items-center bg-white'>
        <Btn type={selectedColor ? "action" : "cancel"} label={"Choose color"} callback={handleButtonPress}/>
      </View>
    </ScrollView>
  )
}

export default SelectColorScreen