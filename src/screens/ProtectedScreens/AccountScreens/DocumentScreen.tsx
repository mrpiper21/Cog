import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import Checkebox from '../../../component/Checkebox'
import RequirementCard from '../../../component/Account/RequirementCard'
import { useUserContext } from '../../../hooks/Usercontext/UserContext'

const DocumentScreen = () => {
  const [check, setChecked] = useState<boolean>(true)
  const User = useContext(useUserContext)
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex bg-white px-4">
        <View className='flex'>
          <View style={{marginTop: Responsiveness.getResponsiveHeight(2), marginBottom: Responsiveness.getResponsiveHeight(1)}}>
              <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(4)}}>Driver requirements</Text>
          </View>
          <View className='flex gap-4 pb-4'>
              <View>
                <RequirementCard check={check} status={"unCompleted"} requirements={"Background Check"} />
              </View>
              <View>
                <RequirementCard route={"front-side"} check={check} status={User?.user.cnicFrontStatus === "Submitted" && User.user.cnicBackStatus === "Submitted" ? "Submitted"  : User?.user.cnicBackStatus === "unCompleted"  && User.user.cnicFrontStatus === "unCompleted"  ? "unCompleted" : "Submitted"} requirements={"Computerized National Identity Card"} />
              </View>
              <View>
                <RequirementCard check={check} status={User?.user.driversLicenseStatus} requirements={"Driver’s License"} route={"License-front"} />
              </View>
              <View>
                <RequirementCard check={check} profilePic={User?.user.profilePic} route={"Profile-photo"} requirements={"Profile Photo"} />
              </View>
          </View>
        </View>
        <View className='flex bg-white mt-4'>
          <View style={{marginTop: Responsiveness.getResponsiveHeight(2), marginBottom: Responsiveness.getResponsiveHeight(1)}}>
              <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(4)}}>Kia Sportage</Text>
          </View>
          <View className='flex gap-4'>
              <View>
                <RequirementCard check={check} status={"unCompleted"} requirements={"Vehicle Insurance"} route={"register-certificate"} />
              </View>
              <View>
                <RequirementCard check={check} status={User?.user.vehicleRegistrationStatus} requirements={"Vehicle Registration"} />
              </View>
          </View>
        </View>
    </ScrollView>
  )
}

export default DocumentScreen