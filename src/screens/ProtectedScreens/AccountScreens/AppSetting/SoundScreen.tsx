import { View, Text, Switch } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness';

const SoundScreen = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View className='flex-1 bg-white px-4'>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Voice Navigation</Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Read Rider Messages</Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Announce Trip Events</Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
      </View>
      <View className='border-[#EEEE] flex flex-row items-center justify-between' style={{paddingVertical: Responsiveness.getResponsiveHeight(2), borderBottomWidth: 1}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '400'}}>Seat Belt Reminder</Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
      </View>
    </View>
  )
}

export default SoundScreen