import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../helpers/Responsiveness'
import Checkebox from '../Checkebox'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Cardprops {
    status?: "Submitted" | "unCompleted" | "completed" |  undefined,
    route?: String
    profilePic?: String
    check: boolean,
    requirements: String
}

const RequirementCard: React.FC<Cardprops> = ({status, check, requirements, profilePic, route}) => {
  const navigation = useNavigation() as any;
  return (
    <>
      {status === "completed" ? (
      <View style={{height: Responsiveness.getResponsiveHeight(10)}} className='flex flex-row justify-between items-center bg-[#E6F7F0] p-4 rounded-xl'>
        <View>
            <Text>{status}</Text>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>{requirements}</Text>
        </View>
      <Checkebox type='check' color='#04AA6D' isChecked={check} />
      </View>
      ) : status === "unCompleted" ? (
        <TouchableOpacity onPress={()=> route && navigation.navigate(route)} style={{height: Responsiveness.getResponsiveHeight(10)}} className='flex flex-row justify-between items-center bg-red-200 p-4 rounded-xl'>
          <View>
              <Text>{status}</Text>
              <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>{requirements}</Text>
          </View>
          <Ionicons name="close" size={24} color="red" />
        </TouchableOpacity>
      ) : status === "Submitted" && (
      <View style={{height: Responsiveness.getResponsiveHeight(10)}} className='flex flex-row justify-between items-center bg-gray-200 p-4 rounded-xl'>
        <View>
            <Text>{status}</Text>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>{requirements}</Text>
        </View>
        <AntDesign name="clockcircle" size={24} color="gray" />
      </View>)}
       {profilePic && (
        <View style={{height: Responsiveness.getResponsiveHeight(10)}} className='flex flex-row justify-between items-center bg-[#E6F7F0] p-4 rounded-xl'>
          <View>
              <Text>completed</Text>
              <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>{requirements}</Text>
          </View>
          <Checkebox type='check' color='#04AA6D' isChecked={check} />
        </View>)}
    </>
  )
}

export default RequirementCard