import { View, TextInput } from 'react-native'
import React from 'react'

interface TextInputProps {
    placeHolderText: string,
    TextOnChangeCallback?: ()=> void
}

const InputTextItem: React.FC<TextInputProps> = ({placeHolderText, TextOnChangeCallback}) => {
  return (
    <TextInput onChangeText={(e)=> TextOnChangeCallback} className=' w-[99%] p-4 border-2 border-[#EEEE] rounded-xl' placeholder={placeHolderText} />
  )
}

export default InputTextItem