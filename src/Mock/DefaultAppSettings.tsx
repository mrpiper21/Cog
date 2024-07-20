import React, { useContext } from 'react'
import SwitchItem from '../component/SwitchItem';
import { AntDesign } from '@expo/vector-icons';
import { useAppContext } from '../hooks/AppSettingContext';
const checkIcon = <AntDesign name="check" size={24} color="blue" />
const Icon = <AntDesign name="check" size={24} color="blue" />
import { Contact } from 'expo-contacts';


const AppSetting = useContext(useAppContext)

export interface SoundSettingsType {
    voiceNavigation: boolean;
    readRiderMessage: boolean;
    announceTripEvents: boolean;
    seatBeltReminder: boolean;
    updateVoiceNavigation: (newValue: boolean)=> void
    updateReadRiderMessage: (newValue: boolean)=> void
    updateAnnounceTripEvents: (newValue: boolean)=> void
    updateSeatBeltReminder: (newValue: boolean)=> void
}

export type NavigationMapItemType = {
    id: number;
    title: string;
    children: string;
    check: React.ReactNode;
}[]

export type NavigationSettingItemType = {
    AutoNavigate: {
        id: number;
        title: string;
        children: string;
    },
    AutoPoolTrip: {
        id: number;
        title: string;
        children: string;
    }
    autoNavigate: boolean,
    autaPoolTrip: boolean,
    toggleAutoNavigate: (value: boolean)=> void
    toggleAutoPoolTrip: (value: boolean)=> void
}


export type AccessibilitySettingsType = {
    screenFlash: boolean;
    vibrationRequest: boolean;
    impairment: boolean;
    toggleScreenFlash: (Value: boolean)=> void
    toggleVibration: (Value: boolean)=> void
    toggleImpairment: (Value: boolean)=> void
}

export type NotificationSettingsType = {
    earningOpportunities: boolean;
    announcements: boolean;
    toggleEarningOpportunities: (value: boolean) => void;
    toggleAnnouncements: (value: boolean) => void;
  };

export type NightModeItemType ={
    id: number;
    label: string;
    checkIcon: React.ReactNode;
}

export type NightModeSettingsType = {
    nightMode: NightModeItemType[];
}

export interface CommunicationSettingsType {
    callOrChat: boolean;
    call: boolean;
    chat: boolean;
}
  
 export type EmergencyContactType = {
    contacts: Contact[];
    selectedContacts: string[]
    filterdedContacts: Contact[],
    updateContacts: (newContacts: Contact[], type?: "filter" | never) => void;
    handleSelectedContacts: (contactName: string) => void
  };

export interface SpeedLimitItemType {
    mph3: boolean;
    mph5: boolean;
    mph7: boolean;
}

export interface SpeedLimitSettingsType {
    showSpeedLimit: boolean;
    speedLimitBelow55mph: SpeedLimitItemType[];
}

export interface RideCheckSettingsType {
    rideCheckNotification: boolean;
    crashDetect: boolean;
}

// export const defaultNavigationSettings: NavigationSettingsType = {
//     navigationMapItems: [
//         {
//             id: 1,
//             title: "Glopilot Navigation",
//             children: "Recommended: Stay in this app",
//             check: checkIcon,
//         },
//         {
//             id: 2,
//             title: "Google Maps",
//             children: "Launches in separate app",
//             check: checkIcon,
//         },
//         {
//             id: 3,
//             title: "Waze",
//             children: "Launches in separate app",
//             check: checkIcon,
//         },
//         {
//             id: 4,
//             title: "Apple Maps",
//             children: "Launches in separate app",
//             check: checkIcon
//         },
//     ], // Add your navigation items here
//     navigationSettingItems: [
//         {
//             id: 1,
//             title: "Auto Navigate",
//             children: "Start trips in turn-by-turn mode. You’ll see a brief route overview first.",
//             switch: <SwitchItem toggleSwitch={()=> AppSetting?.navigation.updateAutoNavigate && AppSetting?.navigation?.updateAutoNavigate(AppSetting?.navigation.autoNavigate)} isEnabled={AppSetting?.navigation.autoNavigate}/>
//         },
//         {
//             id: 2,
//             title: "Navigation on POOL trips",
//             children: "Use Glopilots navigation on all POOL trips.",
//             switch: <SwitchItem toggleSwitch={()=> AppSetting?.navigation.updateAutoPoolTrip && AppSetting?.navigation.updateAutoPoolTrip(AppSetting?.navigation.autaPoolTrip)} isEnabled={AppSetting?.navigation.autaPoolTrip}/>
//         }
//     ],
//     autoNavigate: false,
//     autaPoolTrip: false,
//     // updateAutoNavigate: AppSetting?.navigation.updateAutoNavigate,
//     // updateAutoPoolTrip: AppSetting?.navigation.updateAutoPoolTrip
// };

// export const defaultAccessibilitySettings = {
//     screenFlash: false,
//     vibrationRequest: false,
//     impairment: false,
// };

// export const defaultNotificationSettings = {
//     earningOpportunities: false,
//     announcements: false,
// };

// export const defaultNightModeSettings = {
//     nightMode: [
//         {
//             id: 1,
//             label: "Automatic",
//             checkIcon: Icon
//         },
//         {
//             id: 2,
//             label: "Always on",
//             checkIcon: Icon
//         },
//         {
//             id: 3,
//             label: "Always off",
//             checkIcon: Icon
//         },
//         {
//             id: 4,
//             label: "Use phone Setting",
//             checkIcon: Icon
//         }, // Add your night mode items here
//     ]
// }

// export const defaultCommunicationSettings = {
//     callOrChat: false,
//     call: false,
//     chat: false,
// };

// export const defaultEmergencyContact: EmergencyContactType = {
//     name: '',
//     number: 0,
// };

// export const defaultSpeedLimitSettings: SpeedLimitSettingsType = {
//     showSpeedLimit: false,
//     speedLimitBelow55mph: [],
// };

// export const defaultRideCheckSettings: RideCheckSettingsType = {
//     rideCheckNotification: false,
//     crashDetect: false,
// };