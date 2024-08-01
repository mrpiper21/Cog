import React from 'react'
import {Image} from "react-native"
import Responsiveness from '../helpers/Responsiveness'
export type OptionsTypes = {icon?: React.ReactNode | never | undefined, label: String | number, value:boolean | number | String | null}[]

export const MakeOptions: OptionsTypes = [
    { label: "Toyota", value: "Toyota" },
    { label: "Nissan", value: "Nissan" },
    { label: "Kia", value: "Kia" },
    {label: "Mercedes", value: "Mercedes"}
]

export const ModelOptions: OptionsTypes = [
    {label: "Toyota Camry", value: "camry"},
    {label: "Toyota Corolla", value: "corolla"},
    {label: "Toyota Aygo", value: "Aygo"},
    {label: "Kia Picanto", value: "picanto"},
    {label: "Nissan Micro", value: "micro"},
    {label: "Nissan Macro", value: "macro"},
    {label: "Nissan March", value: "march"}
]
export const YearOptions: OptionsTypes = [
    {label: "2010", value: 2010},
    {label: "2011", value: 2011},
    {label: "2012", value: 2012},
    {label: "2013", value: 2013},
    {label: "2014", value: 2014},
    {label: "2015", value: 2015},
    {label: "2016", value: 2016},
    {label: "2017", value: 2017},
    {label: "2018", value: 2018},
    {label: "2019", value: 2019},
    {label: "2020", value: 2020},
    {label: "2021", value: 2021},
    {label: "2022", value: 2022},
    {label: "2023", value: 2023},
    {label: "2024", value: 2024},
]

export const ColorOptions: OptionsTypes = [
    {label: "White", value: 'white'},
    {label: "Black", value: 'black'},
    {label: "Silver", value: 'silver'},
    {label: "Gray", value: 'gray'},
    {label: "Red", value: 'red'},
    {label: "Brown", value: 'brown'},
    {label: "Blue", value: 'blue'},
    {label: "Light Blue", value: 'lightblue'},
    {label: "Green", value: 'green'},
    {label: "Purple", value: 'purple'},
    {label: "Orange", value: 'orange'},
    {label: "Yellow", value: 'yellow'}
]

export const DoorOptions: OptionsTypes = [
    {label: "Two", value: 2},
    {label: "Four", value: 4}
]

export const SeatOption: OptionsTypes = [
    {label: "One", value: 2},
    {label: "Two", value: 2},
    {label: "Four", value: 4}
]
export const WheelChairOptions: OptionsTypes = [
    {label: "True", value: true},
    {label: "False", value: false},
]
export const VehicleTypeOptions: OptionsTypes = [
    {label: "Personal", value: 'Personal car'},
    {label: "Company", value: 'Company car'},
    {label: "Rent", value: 'Rented car'},
]

export const CommunicationOptions: OptionsTypes = [
    {icon: <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../assets/icons/settings/CallorChat.png")}/>, label: "Call or Chat", value: "callOrchat"},
    {icon: <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../assets/icons/settings/callemergency.png")}/>, label: "Call", value: "call"},
    {icon: <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../assets/icons/settings/chat.png")}/>, label: "Chat", value: "chat"},
]