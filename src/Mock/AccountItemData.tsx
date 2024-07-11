import { Entypo, Ionicons, FontAwesome6, FontAwesome, Fontisto, AntDesign } from '@expo/vector-icons';
import React from 'react';

type AccountItemDataType = {
    iconLeft: React.ReactNode
    name: String
    iconRight: React.ReactNode
}[]

const iconright = <Ionicons name="chevron-forward" size={24} color="black" />

const AccountItemData: AccountItemDataType = [
    {
        iconLeft: <Entypo name="text-document-inverted" size={30} color="black" />,
        name: "Documents",
        iconRight: iconright
    },
    {
        iconLeft: <Ionicons name="card-sharp" size={30} color="black" />,
        name: "Payments",
        iconRight: iconright
    },
    {
        iconLeft: <FontAwesome6 name="calculator" size={30} color="black" />,
        name: "Tax Information",
        iconRight: iconright
    },
    {
        iconLeft: <FontAwesome name="user" size={30} color="black" />,
        name: "Manage Account",
        iconRight: iconright
    },
    {
        iconLeft: <Ionicons name="location-sharp" size={30} color="black" />,
        name: "Edit Address",
        iconRight: iconright
    },
    {
        iconLeft: <Fontisto name="locked" size={24} color="black" />,
        name: "Privacy Center",
        iconRight: iconright
    },
    {
        iconLeft: <Ionicons name="shield-checkmark" size={30} color="black" />,
        name: "Security",
        iconRight: iconright
    },
    {
        iconLeft: <FontAwesome name="cog" size={30} color="black" />,
        name: "App Settings",
        iconRight: iconright
    },
    {
        iconLeft: <AntDesign name="logout" size={24} color="red" />,
        name: "Logout",
        iconRight: iconright
    },
]

export default AccountItemData