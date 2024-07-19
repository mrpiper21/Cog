import React, { createContext, useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {  SoundSettingsType, AccessibilitySettingsType, NotificationSettingsType, NightModeSettingsType, CommunicationSettingsType, SpeedLimitSettingsType, RideCheckSettingsType, EmergencyContactType, NavigationMapItemType, NavigationSettingItemType } from '../Mock/DefaultAppSettings';
const checkIcon = <AntDesign name="check" size={24} color="blue" />
const Icon = <AntDesign name="check" size={24} color="blue" />

export const useAppContext = createContext<{
    activeNavigationItem: String;
    setActiveNavigationItem: React.Dispatch<React.SetStateAction<String>>;
    navigationMapSettings: NavigationMapItemType;
    navigationSettings: NavigationSettingItemType;
    sound: SoundSettingsType;
    accessibility: AccessibilitySettingsType;
    notification: NotificationSettingsType;
    nightMode: NightModeSettingsType;
    communication: CommunicationSettingsType;
    emergencyContact: EmergencyContactType;
    speedLimit: SpeedLimitSettingsType;
    rideCheck: RideCheckSettingsType;
  } | null>(null);

const AppSettingContext: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const updateVoiceNavigation =(value: boolean)=> {
        setSoundSettings((prev: SoundSettingsType)=> ({
            ...prev,
            voiceNavigation: !value
        }))
    }
    const updateReadRiderMessage =(value: boolean)=> {
        setSoundSettings((prev: SoundSettingsType)=> ({
            ...prev,
            readRiderMessage: !value
        }))
    }
    const updateAnnounceTripEvents =(value: boolean)=> {
        setSoundSettings((prev: SoundSettingsType)=> ({
            ...prev,
            announceTripEvents: !value
        }))
    }
    const updateSeatBeltReminder =(value: boolean)=> {
        setSoundSettings((prev: SoundSettingsType)=> ({
            ...prev,
            seatBeltReminder: !value
        }))
    }
    const defaultSoundSettings: SoundSettingsType = {
        voiceNavigation: false,
        readRiderMessage: false,
        announceTripEvents: false,
        seatBeltReminder: false,
        updateAnnounceTripEvents,
        updateReadRiderMessage,
        updateSeatBeltReminder,
        updateVoiceNavigation
    };

    const defaultMapNavigationSettings: NavigationMapItemType = 
        [
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
        ]

    const toggleAutoNavigateSettings = (value: boolean)=> {
        setdefaultnavigationSettingItems((prev: NavigationSettingItemType)=> ({
            ...prev,
            autoNavigate: !value
        }))
    }
    const toggleAutoPoolTripSettings = (value: boolean)=> {
        setdefaultnavigationSettingItems((prev: NavigationSettingItemType)=> ({
            ...prev,
            autaPoolTrip: !value
        }))
    }

    const defaultnavigationSettingItems: NavigationSettingItemType = {
        AutoNavigate: {
            id: 1,
            title: "Auto Navigate",
            children: "Start trips in turn-by-turn mode. You’ll see a brief route overview first.",
        },
        AutoPoolTrip: {
            id: 2,
            title: "Navigation on POOL trips",
            children: "Use Glopilots navigation on all POOL trips.",
        },
        autoNavigate: false,
        autaPoolTrip: false,
        toggleAutoNavigate: toggleAutoNavigateSettings,
        toggleAutoPoolTrip: toggleAutoPoolTripSettings
    }

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
            },
        ]
    }
    
     const defaultCommunicationSettings = {
        callOrChat: false,
        call: false,
        chat: false,
    };
    
     const defaultEmergencyContact: EmergencyContactType = {
        name: '',
        number: 0,
    };
    
     const defaultSpeedLimitSettings: SpeedLimitSettingsType = {
        showSpeedLimit: false,
        speedLimitBelow55mph: [],
    };
    
     const defaultRideCheckSettings: RideCheckSettingsType = {
        rideCheckNotification: false,
        crashDetect: false,
    };
    

    const [activeNavigationItem, setActiveNavigationItem] = useState<String>("Glopilot Navigation")
    const [soundSettings, setSoundSettings] = useState<SoundSettingsType>(defaultSoundSettings);
    const [navigationMapSettings, setNavigationMapSettings] = useState<NavigationMapItemType>(defaultMapNavigationSettings)
    const [defaultNavigationSettings, setdefaultnavigationSettingItems] = useState<NavigationSettingItemType>(defaultnavigationSettingItems)
    const [defaultAccessibility, setdefaultAccessibilitySettings] = useState<AccessibilitySettingsType>(defaultAccessibilitySettings)
    const [defaultNotification, setdefaultNotificationSettings] = useState<NotificationSettingsType>(defaultNotificationSettings)
    const [defaultNightMode, setdefaultNightModeSettings] = useState<NightModeSettingsType>(defaultNightModeSettings)
    const [defaultCommunication, setdefaultCommunicationSettings] = useState<CommunicationSettingsType>(defaultCommunicationSettings)
    const [defaultEmergency, setdefaultEmergencyContact] = useState<EmergencyContactType>(defaultEmergencyContact)
    const [defaultSpeedLimit, setdefaultSpeedLimitSettings] = useState<SpeedLimitSettingsType>(defaultSpeedLimitSettings)
    const [defaultRideCheck, setdefaultRideCheckSettings] = useState<RideCheckSettingsType>(defaultRideCheckSettings)

    const appSettings = {
        activeNavigationItem,
        setActiveNavigationItem,
        navigationMapSettings,
        navigationSettings: defaultNavigationSettings,
        sound: soundSettings,
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