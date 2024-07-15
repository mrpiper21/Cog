import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import { Ionicons } from '@expo/vector-icons';
import { NavigationAppItems, NavigationSettingItems } from '../../../../Mock/NavigationItemData';
import NavigationItem from '../../../../component/Account/Navigation/NavigationItem';

const NavigationScreen = () => {
  const [activeItem, setActiveItem] = useState<String>("")
  return (
    <View className='flex-1'>
      <View className='py-4 bg-white'>
        <View className='px-4'>
          <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Navigation App</Text>
        </View>
        {NavigationAppItems.map((items)=> (
          <NavigationItem key={items.id} title={items.title} text={items.children} rightNode={items.check} setActiveItem={setActiveItem} isActive={activeItem} />
        ))}
      </View>
      <View className='flex-1 py-3 bg-white mt-3'>
        <View className='px-4'>
          <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '600'}}>Navigation App</Text>
        </View>
        {NavigationSettingItems.map((item)=> (
          <NavigationItem key={item.id} title={item.title} text={item.children} rightNode={item.switch}/>
        ))}
        <View className='flex flex-row items-center justify-between p-4'>
          <Text>Routing</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

export default NavigationScreen