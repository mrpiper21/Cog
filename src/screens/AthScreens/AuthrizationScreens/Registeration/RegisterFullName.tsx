import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import InputTextItem from '../../../../widget/InputTextItem'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'
import { useUserContext } from '../../../../hooks/Usercontext/UserContext'

const RegisterFullName = () => {
    const navigation = useNavigation() as any;
    const [name, setName] = useState<{firstName: string, lastName: string}>({firstName: "", lastName: ""})
    const User = useContext(useUserContext)
    const handleFirstName = (text: string)=> {
      console.log(text)
      setName((prev)=> ({
        ...prev,
        firstName: text
      }))
    }
    const handleLasttName = (text: string)=> {
      console.log(text)
      setName((prev)=> ({
        ...prev,
        lastName: text
      }))
    }

    const updateUser = () => {
      User?.updateUser(name)
    }
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
            <Header type='Back-Button'/>
        </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(3)}}>
        <Text style={{fontWeight: '800', fontSize: Responsiveness.getResponsiveWidth(5)}}>What is your first & last name?</Text>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}} className='flex space-y-4'>
        <View>
            <InputTextItem placeHolderText='Enter first name' TextOnChangeCallback={handleFirstName}  />
        </View>
        <View>
            <InputTextItem placeHolderText='Enter last name' TextOnChangeCallback={handleLasttName} />
        </View>
        <View>
            <Btn type={`${name.firstName.length> 3 && name.lastName.length > 3 ? "action" : "cancel"}`} label={"Next"} callback={()=> name.firstName.length> 3 && name.lastName.length > 3 && navigation.navigate("account-type")} />
        </View>
      </View>
    </View>
  )
}

export default RegisterFullName