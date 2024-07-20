import React, { createContext, useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {  SoundSettingsType, AccessibilitySettingsType, NotificationSettingsType, NightModeSettingsType, CommunicationSettingsType, SpeedLimitSettingsType, RideCheckSettingsType, EmergencyContactType, NavigationMapItemType, NavigationSettingItemType } from '../Mock/DefaultAppSettings';
const checkIcon = <AntDesign name="check" size={24} color="blue" />
const Icon = <AntDesign name="check" size={24} color="blue" />
import { Contact } from 'expo-contacts';

export const useAppContext = createContext<{
    activeNavigationItem: String;
    setActiveNavigationItem: React.Dispatch<React.SetStateAction<String>>;
    defaultTheme: String;
    setdefaultTheme: React.Dispatch<React.SetStateAction<String>>;
    navigationMapSettings: NavigationMapItemType;
    navigationSettings: NavigationSettingItemType;
    sound: SoundSettingsType;
    accessibility: AccessibilitySettingsType;
    notification: NotificationSettingsType;
    nightMode: NightModeSettingsType;
    communication: CommunicationSettingsType;
    emergencyContact: EmergencyContactType;
    filteredContacts: Contact[];
    selectedContacts: string[];
    contacts: Contact[];
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

    const defaultAccessibilitySettings: AccessibilitySettingsType = {
        screenFlash: false,
        vibrationRequest: false,
        impairment: false,
        toggleScreenFlash: (value: boolean)=> {
            setdefaultAccessibilitySettings((prev)=> ({
                ...prev,
                screenFlash: !value
            }))
        },
        toggleVibration: (value: boolean)=> {
            setdefaultAccessibilitySettings((prev)=> ({
                ...prev,
                vibrationRequest: !value
            }))
        },
        toggleImpairment: (value: boolean)=> {
            setdefaultAccessibilitySettings((prev)=> ({
                ...prev,
                impairment: !value
            }))
        }
    };
    
    const defaultNotificationSettings: NotificationSettingsType = {
        earningOpportunities: false,
        announcements: false,
        toggleEarningOpportunities: (value: boolean) => {
          setdefaultNotificationSettings((prev) => ({
            ...prev,
            earningOpportunities: !value,
          }));
        },
        toggleAnnouncements: (value: boolean) => {
          setdefaultNotificationSettings((prev) => ({
            ...prev,
            announcements: !value,
          }));
        },
    };
    
     const defaultNightModeSettings: NightModeSettingsType = {
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
    
     const defaultCommunicationSettings: CommunicationSettingsType = {
        callOrChat: true,
        call: false,
        chat: false,
        toggleCheck: (property: 'callOrChat' | 'call' | 'chat') => {
            // Create a new object with the updated state
            const updatedSettings = {
                ...defaultCommunicationSettings,
                    callOrChat: false,
                    call: false,
                    chat: false,
                [property]: true,
              };
            console.log("presses toggle")
            setdefaultCommunicationSettings(updatedSettings);
          },
    };

    const updateContacts = (newContacts: Contact[], type?: "filter" | never) => {
        if(type=== "filter"){
            setFilteredContacts(newContacts)
        } else {
            setContacts(newContacts);
            setFilteredContacts(newContacts)
        }
    };
    
     const defaultEmergencyContact: EmergencyContactType = {
        contacts: [],
        selectedContacts: [],
        filterdedContacts: [],
        updateContacts,
        handleSelectedContacts(contactName: string) {
            if (selectedContacts.includes(contactName)) {
                // Remove contact from selectedContacts
                setSelectedContacts(selectedContacts.filter((name) => name !== contactName));
              } else {
                // Add contact to selectedContacts
                setSelectedContacts([...selectedContacts, contactName]);
              }
        },
        
    };
    
     const defaultSpeedLimitSettings: SpeedLimitSettingsType = {
        showSpeedLimit: false,
        speedLimitBelow55mph: [],
        toggleSpeedLimit: (value: boolean)=> {
            setdefaultSpeedLimitSettings((prev)=> ({
                ...prev,
                showSpeedLimit: !value
            }))
        }
    };
    
     const defaultRideCheckSettings: RideCheckSettingsType = {
        rideCheckNotification: false,
        crashDetect: false,
        togglerideCheckNotification: (value: boolean)=> {
            setdefaultRideCheckSettings((prev)=> ({
                ...prev,
                rideCheckNotification: !value
            }))
        },
        togglecrashDetect: (value: boolean)=> {
            setdefaultRideCheckSettings((prev)=> ({
                ...prev,
                crashDetect: !value
            }))
        }
    };
    

    const [activeNavigationItem, setActiveNavigationItem] = useState<String>("Glopilot Navigation")
    const [defaultTheme, setdefaultTheme] = useState<String>("Automatic")
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [selectedContacts, setSelectedContacts] = useState<string[]>([])
    const [filteredContacts, setFilteredContacts] = useState<Contact[] | any>([]);
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
        defaultTheme,
        setdefaultTheme,
        navigationMapSettings,
        navigationSettings: defaultNavigationSettings,
        sound: soundSettings,
        accessibility: defaultAccessibility,
        notification: defaultNotification,
        nightMode: defaultNightMode,
        communication: defaultCommunication,
        emergencyContact: defaultEmergency,
        filteredContacts,
        selectedContacts,
        contacts,
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