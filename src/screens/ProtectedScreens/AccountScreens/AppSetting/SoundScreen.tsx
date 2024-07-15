import { View, Text, Switch } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness';
import SwitchItem from '../../../../component/SwitchItem';

const SoundScreen = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View className='flex-1 bg-white px-4'>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Voice Navigation</Text>
        <SwitchItem />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Read Rider Messages</Text>
        <SwitchItem />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Announce Trip Events</Text>
        <SwitchItem />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Seat Belt Reminder</Text>
        <SwitchItem />
      </View>
    </View>
  )
}

export default SoundScreen