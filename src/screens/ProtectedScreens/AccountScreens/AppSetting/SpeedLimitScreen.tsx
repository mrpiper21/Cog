import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import SwitchItem from '../../../../component/SwitchItem'
import Responsiveness from '../../../../helpers/Responsiveness'
import { useAppContext } from '../../../../hooks/AppSettingContext'
import { SpeedLimitAbove55mphOptions, SpeedLimitBelow55mphOptions } from '../../../../Mock/Options'
import SpeelimitItem from '../../../../component/AppSetting/Communication/SpeelimitItem'

const SpeedLimitScreen = () => {
    const [check, setCheck] = useState<boolean>(false)
    const AppSettings = useContext(useAppContext)
  return (
    <View>
     <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='items-center flex-row justify-between bg-white px-4'>
        <Text>Show Speed Limit</Text>
        <SwitchItem isEnabled={AppSettings?.speedLimit.showSpeedLimit} toggleSwitch={()=> AppSettings?.speedLimit.toggleSpeedLimit(AppSettings?.speedLimit.showSpeedLimit)} />
     </View>
     {AppSettings?.speedLimit.showSpeedLimit &&
     <>
        <View className='px-4' style={{marginVertical: Responsiveness.getResponsiveHeight(2.5)}}>
            <Text style={{fontWeight: '600'}}>Speeding alerts</Text>
            <Text>Set when you want to get alerts</Text>
        </View>
        <View style={{height: Responsiveness.getResponsiveHeight(25), borderBottomWidth: 1}} className='px-4 py-2 bg-white border-[#EEE]'>
            <Text>Speed limit below 55 mph</Text>
        {SpeedLimitBelow55mphOptions.map((data)=> (
            <SpeelimitItem OptionValue={data.value} label={data.label} value={AppSettings.speedLimitBelow55mph} handleOnChange={AppSettings.setSpeedLimitBelow55mph}/>
        ))}
        </View>
        <View style={{height: Responsiveness.getResponsiveHeight(25), borderBottomWidth: 1}} className='px-4 py-2 bg-white border-[#EEE]'>
            <Text>Speed limit below 55 mph or above</Text>
            {SpeedLimitAbove55mphOptions.map((data)=> (
                <SpeelimitItem OptionValue={data.value} label={data.label} value={AppSettings.speedLimitAbove55mph} handleOnChange={AppSettings.setSpeedLimitAbove55mph} />
            ))}
        </View>
     </>
     }
     
    </View>
  )
}

export default SpeedLimitScreen