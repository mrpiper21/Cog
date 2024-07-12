import { View, Text } from 'react-native'
import React from 'react'
import Responsiveness from '../../helpers/Responsiveness'
import Checkebox from '../Checkebox'

interface Cardprops {
    status: String,
    check: boolean,
    requirements: String
}

const RequirementCard: React.FC<Cardprops> = ({status, check, requirements}) => {
  return (
    <View style={{height: Responsiveness.getResponsiveHeight(10)}} className='flex flex-row justify-between items-center bg-[#E6F7F0] p-4 rounded-xl'>
        <View>
            <Text>{status}</Text>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>{requirements}</Text>
        </View>
        <Checkebox type='check' color='#04AA6D' isChecked={check} />
    </View>
  )
}

export default RequirementCard