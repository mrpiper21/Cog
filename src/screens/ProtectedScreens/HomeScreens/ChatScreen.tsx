import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Responsiveness from '../../../helpers/Responsiveness'
import {MaterialIcons} from '@expo/vector-icons';

export default function ChatScreen() {
  return (
    <View style={{paddingBottom: Responsiveness.getResponsiveHeight(1.5)}} className='flex-1 bg-white justify-between'>
     <View>
        <View className='flex items-center justify-center space-y-2 py-2 border-b-[1px] border-gray-200'>
            <Text>Mon, Apr 289 04:56PM</Text>
            <Text className='text-center'>Keep your account safe - never share personal
            information in this conversation.</Text>
        </View>
     </View>
     <View className='px-3 gap-4'>
        <ScrollView className='gap-4' showsHorizontalScrollIndicator={false} horizontal>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-gray-100 items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(9), width: 'auto', padding: Responsiveness.getResponsiveWidth(2)}}>
                <Text>I'm on my way</Text>
            </TouchableOpacity>
        </ScrollView>
        <View className='flex flex-row items-center justify-between'>
            <TextInput className='bg-gray-100 rounded-lg' style={{height: Responsiveness.getResponsiveWidth(10), width: Responsiveness.getResponsiveWidth(80), paddingHorizontal: Responsiveness.getResponsiveWidth(2)}} placeholder='Type your message...'/>
            <TouchableOpacity className='items-center justify-center rounded-lg bg-[#4460EF]' style={{height: Responsiveness.getResponsiveWidth(10), width: Responsiveness.getResponsiveWidth(12)}}>
                <MaterialIcons name="send" size={24} color="white" />
            </TouchableOpacity>
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({})