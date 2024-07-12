import { View, Text } from 'react-native'
import React from 'react'
import ProfileItem from '../../../component/Drawer/ProfileItem'
import HeaderContainer from '../../../component/Profile/HeaderContainer'
import ProfilePreviewItem from '../../../component/Profile/ProfilePreviewItem'
import ProfileView from '../../../component/Profile/ProfileView'
import { useUserContext } from '../../../hooks/Usercontext/UserContext'
import Responsiveness from '../../../helpers/Responsiveness'
import HelpItem from '../../../component/Help/HelpItem'

const ManageAccountScreen = () => {
    const User = React.useContext(useUserContext)
  return (
    <View className='flex-1 bg-white'>
        {/* <ProfilePreviewItem/> */}
        <ProfileView image={User?.user.profilePic} />
      <View className='p-4'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Basic Info</Text>
      </View>
      <HelpItem type='forward-title-children' title={"Name"} children={"Femi Vanzedkin"}/>
      <HelpItem type='forward-title-children' title={"Pronouns"} children={"Add your Pronouns"}/>
      <HelpItem type='forward-title-children' title={"Phone number"} children={"+1  557  984  1249"} navigateTo='acountPhone-number'/>
      <HelpItem type='forward-title-children' title={"Email"} children={User?.user?.email}/>
    </View>
  )
}

export default ManageAccountScreen