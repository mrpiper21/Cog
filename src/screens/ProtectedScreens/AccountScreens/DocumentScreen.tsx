import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import Checkebox from '../../../component/Checkebox'
import RequirementCard from '../../../component/Account/RequirementCard'

const DocumentScreen = () => {
  const [check, setChecked] = useState<boolean>(true)
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex bg-white px-4">
        <View className='flex'>
          <View style={{marginTop: Responsiveness.getResponsiveHeight(2), marginBottom: Responsiveness.getResponsiveHeight(1)}}>
              <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(4)}}>Driver requirements</Text>
          </View>
          <View className='flex gap-4 pb-4'>
              <View>
                <RequirementCard check={check} status={"completed"} requirements={"Background Check"} />
              </View>
              <View>
                <RequirementCard check={check} status={"completed"} requirements={"Computerized National Identity Card"} />
              </View>
              <View>
                <RequirementCard check={check} status={"completed"} requirements={"Driver’s License"} />
              </View>
              <View>
                <RequirementCard check={check} status={"completed"} requirements={"Profile Photo"} />
              </View>
          </View>
        </View>
        <View className='flex bg-white mt-4'>
          <View style={{marginTop: Responsiveness.getResponsiveHeight(2), marginBottom: Responsiveness.getResponsiveHeight(1)}}>
              <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(4)}}>Kia Sportage</Text>
          </View>
          <View className='flex gap-4'>
              <View>
                <RequirementCard check={check} status={"completed"} requirements={"Vehicle Insurance"} />
              </View>
              <View>
                <RequirementCard check={check} status={"completed"} requirements={"Vehicle Registration"} />
              </View>
          </View>
        </View>
    </ScrollView>
  )
}

export default DocumentScreen