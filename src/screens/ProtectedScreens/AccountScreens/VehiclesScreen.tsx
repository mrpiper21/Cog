import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Header from '../../../widget/Header'
import Responsiveness from '../../../helpers/Responsiveness'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Btn from '../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'
import UnderReviewItem from '../../../component/UnderReviewItem'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Radio from '../../../component/Radio'

const VehiclesScreen = () => {
    const navigation = useNavigation() as any;
    const [checked, setChecked] = useState<boolean>(false)
  return (
    <View className='flex flex-1 bg-white px-4'>
        <View>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.7), fontWeight: '700', marginTop: Responsiveness.getResponsiveHeight(3)}}>Ready to drive</Text>
            <Text>Select a vehicle to drive</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("removeVehicle-account")} style={{marginTop: Responsiveness.getResponsiveHeight(1), paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center justify-between border-b-[1px] border-gray-300'>
            <View className="flex flex-row items-center">
                <View style={{marginRight: Responsiveness.getResponsiveWidth(3)}}>
                    <FontAwesome6 name="car-side" size={24} color="blue" />
                </View>
                <View>
                    <Text>Kia Sportage</Text>
                    <Text>5GIT444 SUV</Text>
                </View>
            </View>
            <Radio />
        </TouchableOpacity>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(1), paddingVertical: Responsiveness.getResponsiveHeight(2)}} className='flex flex-row items-center justify-between border-b-[1px] border-gray-300'>
            <View className="flex flex-row items-center">
                <View style={{marginRight: Responsiveness.getResponsiveWidth(3)}}>
                    <FontAwesome6 name="car-side" size={24} color="blue" />
                </View>
                <View>
                    <Text>Kia Sportage</Text>
                    <Text>5GIT444 SUV</Text>
                </View>
            </View>
            <Radio />
        </View>
        <View>
            <View style={{marginTop: Responsiveness.getResponsiveHeight(3), marginBottom: 15}}>
                <Text style={{fontWeight: '700', fontSize: Responsiveness.getResponsiveWidth(3.4)}}>Pending Vehicle</Text>
                <Text>Complete remaining requirements</Text>
            </View>
            <UnderReviewItem title={"Registration Certificate (RC)"}/>
        </View>
        {checked ? <View></View> : <View style={{marginTop: Responsiveness.getResponsiveWidth(75)}} className='items-center'>
            <Btn type='action' label={"Add a Vehicle"} callback={()=> navigation.navigate("add-vehicle")}/>
        </View>}
    </View>
  )
}

export default VehiclesScreen