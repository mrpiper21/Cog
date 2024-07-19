import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import SwitchItem from '../component/SwitchItem';
const checkIcon = <AntDesign name="check" size={24} color="blue" />

interface SoundSettings {
    voiceNavigation: boolean;
    readRiderMessage: boolean;
    announceTripEvents: boolean;
    seatBeltReminder: boolean;
    updateVoiceNavigation: (newValue: boolean)=> void
    updateReadRiderMessage: (newValue: boolean)=> void
    updateAnnounceTripEvents: (newValue: boolean)=> void
    updateSeatBeltReminder: (newValue: boolean)=> void
}

type NavigationMapItem = {
    id: number;
    title: string;
    children: string;
    check: React.ReactNode;
}[]

type NavigationSettingItem = {
    id: number;
    title: string;
    children: string;
    switch:  React.ReactNode
}[]

type NavigationSettings = {
    navigationMapItems: NavigationMapItem;
    navigationSettingItems: NavigationSettingItem;
    autoNavigate: boolean,
    autaPoolTrip: boolean,
    updateAutoNavigate: (value: boolean)=> void
    updateAutoPoolTrip: (value: boolean)=> void
}


interface AccessibilitySettings {
    screenFlash: boolean;
    vibrationRequest: boolean;
    impairment: boolean;
}

interface NotificationSettings {
    earningOpportunities: boolean;
    announcements: boolean;
}

interface NightModeItem {
    id: number;
    label: string;
    checkIcon: React.ReactNode;
}

interface NightModeSettings {
    nightMode: NightModeItem[];
}

interface CommunicationSettings {
    callOrChat: boolean;
    call: boolean;
    chat: boolean;
}

interface EmergencyContact {
    name: string;
    number: number;
}

interface SpeedLimitItem {
    mph3: boolean;
    mph5: boolean;
    mph7: boolean;
}

interface SpeedLimitSettings {
    showSpeedLimit: boolean;
    speedLimitBelow55mph: SpeedLimitItem[];
}

interface RideCheckSettings {
    rideCheckNotification: boolean;
    crashDetect: boolean;
}

export const useAppContext = createContext<{
    activeNavigationItem: String
    setActiveNavigationIem: React.Dispatch<React.SetStateAction<String>>
    sound: SoundSettings;
    navigation: NavigationSettings
    accessibility: AccessibilitySettings;
    notification: NotificationSettings;
    nightMode: NightModeSettings;
    communication: CommunicationSettings;
    emergencyContact: EmergencyContact;
    speedLimit: SpeedLimitSettings;
    rideCheck: RideCheckSettings;
} | null>(null);

const AppSettingContext: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const Icon = <AntDesign name="check" size={24} color="blue" />
    const updateVoiceNavigation =(value: boolean)=> {
        setSoundSettings((prev)=> ({
            ...prev,
            voiceNavigation: !value
        }))
    }
    const updateReadRiderMessage =(value: boolean)=> {
        setSoundSettings((prev)=> ({
            ...prev,
            readRiderMessage: !value
        }))
    }
    const updateAnnounceTripEvents =(value: boolean)=> {
        setSoundSettings((prev)=> ({
            ...prev,
            announceTripEvents: !value
        }))
    }
    const updateSeatBeltReminder =(value: boolean)=> {
        setSoundSettings((prev)=> ({
            ...prev,
            seatBeltReminder: !value
        }))
    }
    const defaultSoundSettings: SoundSettings = {
        voiceNavigation: false,
        readRiderMessage: false,
        announceTripEvents: false,
        seatBeltReminder: false,
        updateAnnounceTripEvents,
        updateReadRiderMessage,
        updateSeatBeltReminder,
        updateVoiceNavigation
    };
    

    const [activeNavigationItem, setActiveNavigationIem] = useState<String>("Glopilot Navigation")

        const updateAutoNavigate = (value: boolean) => {
            console.log("updating auto navigate")
            setNavigationSettings((prev)=> ({
                ...prev,
                autoNavigate: !value
            }))
        }

        const updateAutoPoolTrip = (value: boolean) => {
            setNavigationSettings((prev)=> ({
                ...prev,
                autaPoolTrip: !value
            }))
        }
        

    const defaultNavigationSettings: NavigationSettings = {
        navigationMapItems: [
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
            },
        ], // Add your navigation items here
        navigationSettingItems: [
            {
                id: 1,
                title: "Auto Navigate",
                children: "Start trips in turn-by-turn mode. You’ll see a brief route overview first.",
                switch: <SwitchItem toggleSwitch={()=> updateAutoNavigate(navigationSettingItems.autoNavigate)} isEnabled={navigationSettingItems.autoNavigate}/>
            },
            {
                id: 2,
                title: "Navigation on POOL trips",
                children: "Use Glopilots navigation on all POOL trips.",
                switch: <SwitchItem toggleSwitch={()=> updateAutoPoolTrip(navigationSettingItems.autaPoolTrip)} isEnabled={navigationSettingItems.autaPoolTrip}/>
            }
        ],
        autoNavigate: navigationSettings.autoNavigate,
        autaPoolTrip: navigationSettings.autaPoolTrip,
        updateAutoNavigate: updateAutoNavigate,
        updateAutoPoolTrip: updateAutoPoolTrip
    };

    const defaultAccessibilitySettings = {
        screenFlash: false,
        vibrationRequest: false,
        impairment: false,
    };

    const defaultNotificationSettings = {
        earningOpportunities: false,
        announcements: false,
    };

    const defaultNightModeSettings = {
        nightMode: [
            {
                id: 1,
                label: "Automatic",
                checkIcon: Icon
            },
            {
                id: 2,
                label: "Always on",
                checkIcon: Icon
            },
            {
                id: 3,
                label: "Always off",
                checkIcon: Icon
            },
            {
                id: 4,
                label: "Use phone Setting",
                checkIcon: Icon
            }, // Add your night mode items here
        ]
    }

    const defaultCommunicationSettings = {
        callOrChat: false,
        call: false,
        chat: false,
    };

    const defaultEmergencyContact: EmergencyContact = {
        name: '',
        number: 0,
    };

    const defaultSpeedLimitSettings: SpeedLimitSettings = {
        showSpeedLimit: false,
        speedLimitBelow55mph: [],
    };

    const defaultRideCheckSettings: RideCheckSettings = {
        rideCheckNotification: false,
        crashDetect: false,
    };
    const icon = <AntDesign name="check" size={24} color="blue" />


const [soundSettings, setSoundSettings] = useState<SoundSettings>(defaultSoundSettings);
const [navigationSettings, setNavigationSettings] = useState(defaultNavigationSettings);
const [defaultAccessibility, setdefaultAccessibilitySettings] = useState(defaultAccessibilitySettings)
const [defaultNotification, setdefaultNotificationSettings] = useState(defaultNotificationSettings)
const [defaultNightMode, setdefaultNightModeSettings] = useState(defaultNightModeSettings)
const [defaultCommunication, setdefaultCommunicationSettings] = useState(defaultCommunicationSettings)
const [defaultEmergency, setdefaultEmergencyContact] = useState(defaultEmergencyContact)
const [defaultSpeedLimit, setdefaultSpeedLimitSettings] = useState(defaultSpeedLimitSettings)
const [defaultRideCheck, setdefaultRideCheckSettings] = useState(defaultRideCheckSettings)

const appSettings = {
    activeNavigationItem,
    setActiveNavigationIem,
    sound: soundSettings,
    navigation: navigationSettings,
    accessibility: defaultAccessibility,
    notification: defaultNotification,
    nightMode: defaultNightMode,
    communication: defaultCommunication,
    emergencyContact: defaultEmergency,
    speedLimit: defaultSpeedLimit,
    rideCheck: defaultRideCheck,
};

  return (
    <useAppContext.Provider value={appSettings}>
        {children}
    </useAppContext.Provider>
  )
}

export default AppSettingContext