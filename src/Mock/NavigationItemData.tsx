import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import SwitchItem from '../component/SwitchItem';

const checkIcon = <AntDesign name="check" size={24} color="blue" />
const Switchtoggle = <SwitchItem />

export const NavigationAppItems = [
    {
        id: 1,
        title: "Glopilot Navigation",
        children: "Recommended: Stay in this app",
        check: checkIcon,
    },
    {
        id: 2,
        title: "Google Maps",
        children: "Launches in separate app",
        check: checkIcon,
    },
    {
        id: 3,
        title: "Waze",
        children: "Launches in separate app",
        check: checkIcon,
    },
    {
        id: 4,
        title: "Apple Maps",
        children: "Launches in separate app",
        check: checkIcon
    }
]

export const NavigationSettingItems = [
    {
        id: 1,
        title: "Auto Navigate",
        children: "Start trips in turn-by-turn mode. You’ll see a brief route overview first.",
        switch: Switchtoggle
    },
    {
        id: 2,
        title: "Navigation on POOL trips",
        children: "Use Glopilots navigation on all POOL trips.",
        switch: Switchtoggle
    }
]