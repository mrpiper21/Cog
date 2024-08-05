import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RoundedCheckbox } from 'react-native-rounded-checkbox'
import Responsiveness from '../../helpers/Responsiveness'
import Checkbox from 'expo-checkbox'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native'

interface SurverProps {
    type: 'rounded' | 'box',
    children: String,
    id: number
    callback?: (id: number)=> void
    activeItem?: number
    setActiveItem?: React.Dispatch<React.SetStateAction<number>>
}

const SurveyItem: React.FC<SurverProps> = ({type, children, callback, id, activeItem, setActiveItem}) => {
    const [checkedBox, setCheckedBox] = useState<boolean>(false)
  return (
    <View style={{borderBottomWidth: 2, borderColor: "#EEEE"}} className='flex flex-row items-center space-x-4 py-6'>
        {type === "rounded"
         ? <TouchableOpacity onPress={()=> setActiveItem && setActiveItem(id)}>
            <AntDesign name={activeItem === id ? "checkcircle" : "checkcircleo"} size={24} color="blue" />
         </TouchableOpacity>
         : <Checkbox
                style={styles.checkbox}
                value={true}
                onValueChange={()=>setCheckedBox(!checkedBox)}
                color={checkedBox ? "blue" : "lightgray"}
                // onChange={()=> setCheckedBox(false)}
        />}
        <Text>{children}</Text>
      </View>
  )
}

export default SurveyItem

const styles = StyleSheet.create({
    checkbox: {
      margin: 8,
      height: Responsiveness.getResponsiveWidth(5),
      width: Responsiveness.getResponsiveWidth(5),
      borderRadius: 5,
    }
  });