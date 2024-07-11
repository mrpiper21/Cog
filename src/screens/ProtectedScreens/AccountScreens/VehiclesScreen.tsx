import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../../widget/Header'
import Responsiveness from '../../../helpers/Responsiveness'
import { RoundedCheckbox } from 'react-native-rounded-checkbox'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Btn from '../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'
import UnderReviewItem from '../../../component/UnderReviewItem'

const VehiclesScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.7), fontWeight: '700', marginTop: Responsiveness.getResponsiveHeight(3)}}>Ready to drive</Text>
            <Text>Select a vehicle to drive</Text>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(1), paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center justify-between border-b-[1px] border-gray-300'>
            <View className="flex flex-row items-center">
                <Image className="mr-3" source={require("../../../../assets/carRMV-img.png")} />
                <View>
                    <Text>Kia Sportage</Text>
                    <Text>5GIT444 SUV</Text>
                </View>
            </View>
            <RoundedCheckbox checkedColor='blue' text='' />
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(1), paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center justify-between border-b-[1px] border-gray-300'>
            <View className="flex flex-row items-center">
                <Image className="mr-3" source={require("../../../../assets/carRMV-img.png")} />
                <View>
                    <Text>Kia Sportage</Text>
                    <Text>5GIT444 SUV</Text>
                </View>
            </View>
            <RoundedCheckbox checkedColor='blue' text='' />
        </View>
        <View>
            <View style={{marginTop: Responsiveness.getResponsiveHeight(3), marginBottom: 15}}>
                <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(3.4)}}>Pending Vehicle</Text>
                <Text>Complete remaining requirements</Text>
            </View>
            <UnderReviewItem title={"Registration Certificate (RC)"}/>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveWidth(75)}} className='items-center'>
            <Btn type='action' label={"Add a Vehicle"} callback={()=> navigation.navigate("add-vehicle")}/>
        </View>
    </View>
  )
}

export default VehiclesScreen