import React from "react"
import { AntDesign } from '@expo/vector-icons';

type NightModeDataType = {
    id: number
    label: String,
    checkIcon: React.ReactNode,
}[]

const icon = <AntDesign name="check" size={24} color="blue" />

const NightModeData: NightModeDataType = [
    {
        id: 1,
        label: "Automatic",
        checkIcon: icon
    },
    {
        id: 2,
        label: "Always on",
        checkIcon: icon
    },
    {
        id: 3,
        label: "Always off",
        checkIcon: icon
    },
    {
        id: 4,
        label: "Use phone Setting",
        checkIcon: icon
    }
]

export default NightModeData;