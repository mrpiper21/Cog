import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RoundedCheckbox } from 'react-native-rounded-checkbox'
import Responsiveness from '../../helpers/Responsiveness'
import Checkbox from 'expo-checkbox'
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface SurverProps {
    type: 'rounded' | 'box',
    children: String,
    isChecked: boolean
    id: number
    callback?: (id: number)=> void
}

// why do you want to drive with Glopilots

export const WhyDriveGlopilots = [
    {
        id: 1,
        text: "Be my own boss",
        checked: true
    },
    {
        id: 2,
        text: "Make extra money on the side",
        checked: false
    },
    {
        id: 3,
        text: "Save for a specific purchase",
        checked: false
    },
    {
        id: 4,
        text: "Meet new people",
        checked: false,
    },
    {
        id: 5,
        text: "Need something temporary",
        checked: false
    }
]

export const HowManyHours = [
    {
        id: 1,
        text: "fewer than 5 hours",
        checked: false
    },
    {
        id: 2,
        text: "5-15 hours",
        checked: false
    },
    {
        id: 3,
        text: "6-20",
        checked: false
    },
    {
        id: 4,
        text: "21-35",
        checked: false,
    },
    {
        id: 5,
        text: "36+ hours",
        checked: false
    }
]

export const WhenToDrive = [
    {
        id: 1,
        text: "Morning",
        checked: false
    },
    {
        id: 2,
        text: "Afternoon",
        checked: false
    },
    {
        id: 3,
        text: "Evening",
        checked: false
    },
    {
        id: 4,
        text: "Night",
        checked: false,
    },
    {
        id: 5,
        text: "Weekend",
        checked: false
    },
    {
        id: 6,
        text: "Weekday",
        checked: false
    },
    {
        id: 7,
        text: "All time of the day",
        checked: false
    },

]

export const ApplyToDriveWihtOtherApp = [
    {
        id: 1,
        text: "No, just Glopilots",
        checked: false
    },
    {
        id: 2,
        text: "Yes, Rideshare apps",
        checked: false
    },
    {
        id: 3,
        text: "Yes, Delivery Apps",
        checked: false
    },
    {
        id: 4,
        text: "Yes, Both rideshare and delivery apps",
        checked: false,
    },
]

const SurveyItem: React.FC<SurverProps> = ({type, children, isChecked, callback, id}) => {
    const [checkedBox, setCheckedBox] = useState<boolean>(false)
  return (
    <View style={{borderBottomWidth: 2, borderColor: "#EEEE"}} className='flex flex-row items-center space-x-4 py-6'>
        {type === "rounded" ? <BouncyCheckbox
            onPress={()=> callback && callback(id)}
            isChecked={isChecked}
            disableText
            fillColor='blue'
            // outerStyle={{width: Responsiveness.getResponsiveWidth(5), height: Responsiveness.getResponsiveWidth(5)}}
            // innerStyle={{width: Responsiveness.getResponsiveWidth(5), height: Responsiveness.getResponsiveWidth(5)}}
        /> : <Checkbox
                style={styles.checkbox}
                value={true}
                onValueChange={()=>setCheckedBox(!checkedBox)}
                color={checkedBox ? "blue" : undefined}
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
      height: Responsiveness.getResponsiveWidth(4),
      width: Responsiveness.getResponsiveWidth(4),
      borderRadius: 5,
    }
  });