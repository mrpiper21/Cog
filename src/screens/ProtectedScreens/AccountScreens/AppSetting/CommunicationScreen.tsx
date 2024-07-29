import { View, Text, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import Checkebox from '../../../../component/Checkebox'
import HelpItem from '../../../../component/Help/HelpItem'
import Btn from '../../../../widget/Btn'
import { useAppContext } from '../../../../hooks/AppSettingContext'
import { CommunicationOptions } from '../../../../Mock/Options'
import CommunicationItem from '../../../../component/AppSetting/Communication/CommunicationItem'

const CommunicationScreen = () => {
  const AppSettings = useContext(useAppContext)
  return (
    <View className='flex-1 bg-white'>
      <View style={{margin: Responsiveness.getResponsiveWidth(3)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Contact preferences</Text>
      </View>
      {CommunicationOptions.map((Option)=> 
         (<CommunicationItem icon={Option.icon} label={Option.label} value={Option.value}/>)
      )}
      <View className='p-4 space-y-1'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Marketing Preferences</Text>
        <Text>Choose how to get special offers, promos, personalized suggestions, and more.</Text>
      </View>
      <HelpItem type='forward' children={"Push notifications"} />
      <HelpItem type='forward' children={"Email"} />
      <View style={{marginTop: Responsiveness.getResponsiveHeight(18.8)}} className='items-center'>
        <Btn type='action' label={'Save Changes'}/>
      </View>
    </View>
  )
}

export default CommunicationScreen