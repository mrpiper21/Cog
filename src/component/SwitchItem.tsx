import { View, Text, Switch } from 'react-native'
import React from 'react'

interface SwitchProps {
  isEnabled: boolean | undefined, 
  toggleSwitch: (value?: boolean )=> void 
}

const SwitchItem: React.FC<SwitchProps> = ({isEnabled, toggleSwitch}) => {
  return (
    <Switch
            trackColor={{false: '#767577', true: 'blue'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
  )
}

export default SwitchItem