import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import Btn from '../../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'

const AddCarDetailsScreen = () => {
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4 justify-between mb-4'>
      <View>
        <Header type='Back-Button'/>
      </View>
      <View>
        <View className='flex items-center'>
            <Image source={require("../../../../../assets/icons/CarXpersonIcon.png")} />
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}} className='space-y-2'>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Add Car Details</Text>
            <Text>We need your vehicle's make, model, year, and
                other specifications to enhance your trips and
                ensure you receive the most suitable ride requests.
                By providing accurate car details, you'll receive
                relevant trip information, including estimated fares
                and trip durations, tailored specifically to your
                vehicle. Stay ahead on the road and make each ride
                smoother and more efficient for both you and your
                passengers!
            </Text>
        </View>
      </View>
      <View className='flex items-center'>
        <Btn type='action' label={"Next"} callback={()=> navigation.navigate("addPersonalCar")} />
      </View>
    </View>
  )
}

export default AddCarDetailsScreen