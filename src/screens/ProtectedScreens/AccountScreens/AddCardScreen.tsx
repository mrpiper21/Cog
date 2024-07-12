import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import Responsiveness from '../../../helpers/Responsiveness'
import { FontAwesome } from '@expo/vector-icons';
import DropdownInput from '../../../widget/DropdownInput';
import Btn from '../../../widget/Btn';
import CountryPicker from "rn-country-dropdown-picker";

const AddCardScreen = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [country, setCountry] = React.useState()
  const handleInputChange = (text: any) => {
    const cleanedText = text.replace(/[^0-9]/g, '').slice(0, 2);
    setInputValue(cleanedText);
  };
  // function setCountry(e: string) {
  //   console.log(e);
  // }

  country && console.log(country)
  return (
    <View className='flex-1 bg-white px-4 justify-between mb-4'>
      <View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='space-y-2'>
          <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>Card number</Text>
          <View className='flex flex-row items-center border-[1.5px] border-gray-300 rounded-xl px-4'>
            <Fontisto name="credit-card" size={15} color="lightgray" />
            <TextInput className='w-[94.5%] rounded-r-xl ml-4' style={{paddingVertical: Responsiveness.getResponsiveHeight(1.8)}} placeholder='Enter card number' />
          </View>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center justify-between'>
          <View className='space-y-3'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>Expiry Date</Text>
            <View className='border-[1.5px] border-gray-300 rounded-xl px-4 flex-row justify-between' style={{width: Responsiveness.getResponsiveWidth(40), paddingVertical: Responsiveness.getResponsiveHeight(1.2)}}>
              <View className='flex flex-row items-center space-x-1'>
                <TextInput className='w-[25%]' value={inputValue} keyboardType="numeric" onChangeText={handleInputChange} placeholder='MM'/>
                <TextInput className='w-[25%]' value={inputValue} keyboardType="numeric" onChangeText={handleInputChange} placeholder='YY'/>
              </View>
              <FontAwesome name="angle-down" size={24} color="gray" />
            </View>
          </View>
          <View className='space-y-3'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), fontWeight: '700'}}>CVV</Text>
            <View className='border-[1.5px] border-gray-300 rounded-xl px-4 flex-row justify-between' style={{width: Responsiveness.getResponsiveWidth(40), paddingVertical: Responsiveness.getResponsiveHeight(1.2)}}>
              <TextInput className='w-[25%]' value={inputValue} keyboardType="numeric" onChangeText={handleInputChange} placeholder='CVV'/>
            </View>
          </View>
        </View>
        <View className='space-y-3' style={{marginTop: Responsiveness.getResponsiveHeight(3)}}>
          <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5), marginLeft: Responsiveness.getResponsiveWidth(2), fontWeight: '700'}}>Country</Text>
          <View className='flex items-center'>
            <CountryPicker
              selectedItem={(e: any)=> setCountry(e)}
              InputFieldStyle={styles.ContainerStyle}
              ContainerStyle={{width: Responsiveness.getResponsiveWidth(93)}}
              DropdownContainerStyle={styles.myDropdownContainerStyle}
              DropdownRowStyle={styles.myDropdownRowStyle}
              Placeholder="Select Country"
              DropdownCountryTextStyle={styles.myDropdownCountryTextStyle}
              countryNameStyle={styles.mycountryNameStyle}
              flagSize={24}
            />
          </View>
        </View>
      </View>
      <View className='flex items-center'>
        <Btn type='action' label={"Add card"}/>
      </View>
    </View>
  )
}

export default AddCardScreen;

const styles = StyleSheet.create({
  ContainerStyle: {
    paddingHorizontal: Responsiveness.getResponsiveWidth(2),
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  myDropdownContainerStyle: {
    borderWidth: 0,
  },
  myDropdownRowStyle: {
    borderColor: "lightgray",
    backgroundColor: "white",
    paddingVertical: Responsiveness.getResponsiveWidth(1.5)
  },
  myDropdownCountryTextStyle: {
    width: 100
  },
  mycountryNameStyle: {
    // borderRadius:20
  }
})