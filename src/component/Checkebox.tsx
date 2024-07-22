import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RoundedCheckbox } from 'react-native-rounded-checkbox';
import Responsiveness from '../helpers/Responsiveness';
import Checkbox from 'expo-checkbox'

interface checkboxprops {
    type: 'rounded' | 'box' | 'check',
    children?: String,
    isChecked: boolean | undefined
    color: string
    id?: number
    callback: (value?: boolean)=> void
}

const Checkebox: React.FC<checkboxprops> = ({type, isChecked, callback, id, color}) => {
  console.log("is checked", isChecked)
  return (
    type === 'check' ? <BouncyCheckbox
      onPress={()=>  callback()}
      isChecked={isChecked}
      disableText
      fillColor='#4630EB'
      // outerStyle={{width: Responsiveness.getResponsiveWidth(5), height: Responsiveness.getResponsiveWidth(5)}}
      // innerStyle={{width: Responsiveness.getResponsiveWidth(5), height: Responsiveness.getResponsiveWidth(5)}}
    />: type === 'box' ? 
    <Checkbox
      id={id?.toString()}
      style={styles.checkbox}
      value={isChecked}
      // onValueChange={handleValueChange}
      color={isChecked ? "#4630EB" : undefined}
      // onChange={callback}
    /> : <CircleCheckBox
    checked={isChecked}
    onToggle={(checked: boolean) => {
      console.log('My state is: ', checked)
      callback()
    }}
  />
  )
}

export default Checkebox;

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
    height: Responsiveness.getResponsiveWidth(4),
    width: Responsiveness.getResponsiveWidth(4),
    borderRadius: 5,
  }
});