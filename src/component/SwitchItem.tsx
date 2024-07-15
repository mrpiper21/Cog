import { View, Text, Switch } from 'react-native'
import React from 'react'

const SwitchItem = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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