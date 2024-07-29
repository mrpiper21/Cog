import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface RadioProps {
    value?:string
    checkedValue?: string,
    onChange?: React.Dispatch<React.SetStateAction<string>>,
}

export default function Radio({value, checkedValue, onChange }:RadioProps) {
  return (
    <TouchableOpacity key={value} onPress={()=> onChange && value && onChange(value)}>
        <MaterialIcons name={checkedValue === value ? "radio-button-checked" : "radio-button-unchecked"} size={30} color="#4460EF" />
    </TouchableOpacity>
  )
}