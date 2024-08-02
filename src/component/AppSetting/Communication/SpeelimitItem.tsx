import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import Radio from '../../Radio'
import { useAppContext } from '../../../hooks/AppSettingContext'

interface SpeelimitItemProps {
    label: String | number,
    value?: string | never,
    OptionValue: string,
    handleOnChange: React.Dispatch<React.SetStateAction<string>>
}

const SpeelimitItem: React.FC<SpeelimitItemProps> = ({label, value, handleOnChange, OptionValue}) => {
    // const Settings = useContext(useAppContext);
  return (
    <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
        <View className='flex-row items-center space-x-2'>
            <Radio value={OptionValue} checkedValue={value} onChange={handleOnChange}/>
            <Text>{label}</Text>
        </View>
    </View>
  )
}

export default SpeelimitItem