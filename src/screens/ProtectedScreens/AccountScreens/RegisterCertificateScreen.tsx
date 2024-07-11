import { View, Text, Image } from 'react-native'
import React from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import Btn from '../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const RegisterCertificateScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex-1 bg-white px-4 justify-between mb-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(5)}} className='flex space-y-6'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(5), fontWeight: '700'}}>Take a picture of your Registration
        Certificate (RC)</Text>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.4)}}>If the name of the vehicle owner on the vehicle
            document differs from mine, I hereby confirm that I
            have obtained the vehicle owner's consent to drive
            this vehicle on the Glopilots platform. This
            declaration can be treated as a No-Objection
            Certificate and releases Glopilots from any legal
            obligations and consequences.
        </Text>
        <View className='items-center'>
            <Image source={require("../../../../assets/certificate.png")} />
        </View>
      </View>
      <View className='flex items-center'>
        <Btn type='action' label={"Take Photo"} callback={()=> navigation.navigate("certificate-camera")} />
      </View>
    </View>
  )
}

export default RegisterCertificateScreen