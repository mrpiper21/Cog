import { View, Text } from 'react-native'
import React from 'react'

interface AppSettingTypes {
    sound: {
        voiceNavgiagion: boolean,
        readRiderMessage: boolean,
        announceTripEvents: boolean,
        seatBeltReminder: boolean
    },
    navigation: {
        navigationMapItems: {
            id: number,
            title: String,
            children: String,
            check: React.ReactNode,
        }[],
        navigationSettingItems: {
            id: number,
            title: String,
            children: String,
            switch: React.JSX.Element,
        }[],
    },
    accessiblilty: {
        screenFlash: boolean
        vibrationRequest: boolean
        impairment: boolean
    },
    notificaion: {
        earningOpportunities: boolean
        announcements: boolean
    },
    nightMode: {
        
    }
}

const AppSettingContext = () => {
  return (
    <View>
      <Text>AppSettingContext</Text>
    </View>
  )
}

export default AppSettingContext