import { View, Text, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import Checkebox from '../../../../component/Checkebox'
import HelpItem from '../../../../component/Help/HelpItem'
import Btn from '../../../../widget/Btn'
import { useAppContext } from '../../../../hooks/AppSettingContext'

const CommunicationScreen = () => {
  const AppSettings = useContext(useAppContext)
  return (
    <View className='flex-1 bg-white'>
      <View style={{margin: Responsiveness.getResponsiveWidth(3)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Contact preferences</Text>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}} className='flex flex-row items-center justify-between px-4 border-[#EEEE]'>
        <View className='flex flex-row items-center'>
            <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../../../../assets/icons/settings/CallorChat.png")}/>
            <View className='space-y-1'>
                <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Call or chat</Text>
                <Text>Recommeded</Text>
            </View>
        </View>
        <Checkebox type='rounded' isChecked={AppSettings?.communication.callOrChat} callback={()=> AppSettings?.communication.toggleCheck('callOrChat')} color='blue'/>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}} className='flex flex-row items-center justify-between px-4 border-[#EEEE]'>
        <View className='flex flex-row items-center'>
            <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../../../../assets/icons/settings/callemergency.png")}/>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Call</Text>
        </View>
        <Checkebox type='rounded' isChecked={AppSettings?.communication.call} color='blue' callback={()=> AppSettings?.communication.toggleCheck('call')}/>
      </View>
      <View style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}} className='flex flex-row items-center justify-between px-4 border-[#EEEE]'>
        <View className='flex flex-row items-center'>
            <Image style={{marginRight: Responsiveness.getResponsiveWidth(3)}} source={require("../../../../../assets/icons/settings/chat.png")}/>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Chat</Text>
        </View>
        <Checkebox type='rounded' isChecked={AppSettings?.communication.chat} callback={()=> AppSettings?.communication.toggleCheck('chat')} color='blue' />
      </View>
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