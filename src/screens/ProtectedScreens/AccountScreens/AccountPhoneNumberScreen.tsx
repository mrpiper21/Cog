import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useRef} from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import PhoneInput from "react-native-phone-number-input";
import Btn from '../../../widget/Btn';
import { useNavigation } from '@react-navigation/native';

const AccountPhoneNumberScreen = () => {
    const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const navigation = useNavigation() as any;

  return (
    <View className='flex-1 bg-white px-4'>
      <View className='space-y-3'>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(3)}}>
            <Text style={{fontWeight:'700', fontSize: Responsiveness.getResponsiveWidth(4)}}>Phone Number</Text>
        </View>
        <View>
            <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="DM"
                layout="first"
                onChangeText={(text) => {
                setValue(text);
                }}
                onChangeFormattedText={(text) => {
                setFormattedValue(text);
                }}
                // withDarkTheme
                withShadow
                autoFocus
                textContainerStyle={styles.textInput}
                countryPickerButtonStyle={styles.countryPicker}
                containerStyle={{width: Responsiveness.getResponsiveWidth(93)}}
            />    
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(3)}} className='flex items-center'>
        <Btn type='action' label={"Continue"} callback={()=> navigation.navigate('otp-verification')} />
      </View>
    </View>
  )
}

export default AccountPhoneNumberScreen

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, 
        borderColor: "lightgray",
        borderRadius: 5,
        marginLeft: 10,
    },
    countryPicker: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    }

})