import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Responsiveness from '../../../helpers/Responsiveness';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable-item';
import RideItem from './RideItem';

const ClientItem = () => {
    const navigation = useNavigation() as any;
  return (
    <View style={{paddingHorizontal: Responsiveness.getResponsiveWidth(5), marginVertical: Responsiveness.getResponsiveHeight(3)}} className='flex flex-row items-center justify-between'>
      <TouchableOpacity className='border-[1px] p-3 rounded-full border-gray-200' onPress={() => navigation.navigate("chat")}>
        {/* <Ionicons name="options-outline" size={wp(8)} color="black" /> */}
        <MaterialCommunityIcons name="chat-processing" size={Responsiveness.getResponsiveWidth(7)} color="black" />
      </TouchableOpacity>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>Femi Vanzekin</Text>
      <TouchableOpacity
        className='border-[1px] p-3 rounded-full border-gray-200'
        onPress={() => navigation.navigate("Recommendation")}
      >
       <FontAwesome5 name="user-alt" size={Responsiveness.getResponsiveWidth(7)} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default ClientItem