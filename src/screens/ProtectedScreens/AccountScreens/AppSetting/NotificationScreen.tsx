import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import SwitchItem from '../../../../component/SwitchItem'
import Btn from '../../../../widget/Btn'
import { useAppContext } from '../../../../hooks/AppSettingContext'

const NotificationScreen = () => {
  const Settings = useContext(useAppContext)
  return (
    <View className='flex-1 bg-white px-4 justify-between pb-4'>
      <View>
        <View className='p-4'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Push Notification</Text>
        </View>
            <View style={{paddingVertical: Responsiveness.getResponsiveHeight(1.5), borderBottomWidth: 1}} className='flex flex-row item-center justify-between border-[#EEEE]'>
                <View className='flex space-y-1'>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Earning Opportunities</Text>
                    <View style={{width: Responsiveness.getResponsiveWidth(75)}}>
                        <Text>Demand info, promotions from Glopilots,
                        and additional ways to earn</Text>
                    </View>
                </View>
                {/* <SwitchItem isEnabled={Settings?.notification.announcements} setIsEnabled={()=> Settings?.sound}/> */}
            </View>
            <View style={{paddingVertical: Responsiveness.getResponsiveHeight(1.5), borderBottomWidth: 1}} className='flex flex-row item-center justify-between border-[#EEEE]'>
                <View className='flex space-y-1'>
                    <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '600'}}>Announcements and more</Text>
                    <View style={{width: Responsiveness.getResponsiveWidth(75)}}>
                        <Text>News from Glopilots and other messages</Text>
                    </View>
                </View>
                <SwitchItem />
            </View>
      </View>
      <View className='flex items-center'>
        <Btn type='action' label={"Save Changes"}/>
      </View>
    </View>
  )
}

export default NotificationScreen