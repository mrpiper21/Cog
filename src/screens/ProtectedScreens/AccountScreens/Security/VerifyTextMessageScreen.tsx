import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Responsiveness from '../../../../helpers/Responsiveness'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const VerifyTextMessageScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View style={{marginVertical: Responsiveness.getResponsiveHeight(3)}}>
            <Text style={{fontSize: Responsiveness.getResponsiveHeight(2.5), fontWeight: '700'}}>How would you like to receive
            verification code?</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("twoStep-verification", {title: "Great job! Your account is nowmore secure.", message: "2-Step Verification is ON. Now, when you sign in toyour account, you’ll be asked for your password and a verification code.", btnText: "Done"})} className='flex flex-row items-center justify-between'>
            <View className='flex flex-row items-center'>
                <View className='items-center justify-center rounded-full' style={{height: Responsiveness.getResponsiveWidth(15), width: Responsiveness.getResponsiveWidth(15), backgroundColor: '#EEEE', marginRight: Responsiveness.getResponsiveWidth(3)}}>
                    <Image source={require("../../../../../assets/icons/PoneSecureSM.png")} />
                </View>
                <View>
                    <Text style={{fontWeight: "700"}}>Text Message</Text>
                    <View style={{width: Responsiveness.getResponsiveWidth(65)}}>
                        <Text>You’ll receive verification code via text
                            message when you sign into your
                            account.
                        </Text>
                    </View>
                </View>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default VerifyTextMessageScreen