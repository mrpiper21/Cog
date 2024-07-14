import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

const ffIcon = <Ionicons name="chevron-forward" size={24} color="black" />

type SettingsType = {
    leftIcon: React.ReactNode,
    name: String,
    route: String
    rightIcon: React.ReactNode
}[]

const SettingsItemData: SettingsType = [
    {
        leftIcon: <Image source={require("../../assets/icons/settings/sound.png")}/>,
        name: "Sounds",
        route: "sound",
        rightIcon: ffIcon
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/navigate.png")}/>,
        name: "Navigation",
        route: "navigate",
        rightIcon: ffIcon
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/Accesiblity.png")}/>,
        name: "Accessibility",
        route: 'accessibility',
        rightIcon: ffIcon,
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/notify.png")}/>,
        name: "Notification",
        route: "notification",
        rightIcon: ffIcon,
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/moon.png")}/>,
        name: "Night Mode",
        route: "theme",
        rightIcon: ffIcon
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/call.png")}/>,
        name: "Communication",
        route: "communication",
        rightIcon: ffIcon,
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/locate.png")}/>,
        name: "Follow My Ride",
        route: "locate-ride",
        rightIcon: ffIcon,
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/callemergency.png")}/>,
        name: "Emergency Contact",
        route: "e-contact",
        rightIcon: ffIcon,
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/speedometer.png")}/>,
        name: "Speed Limit",
        route: "speed-limit",
        rightIcon: ffIcon,
    },
    {
        leftIcon: <Image source={require("../../assets/icons/settings/shield.png")}/>,
        name: "Ride Check",
        route: "check-ride",
        rightIcon: ffIcon,
    },
]

export default SettingsItemData