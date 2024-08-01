import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import UnderReviewItem from '../../../component/UnderReviewItem'
import axios from 'axios'
import { baseURL, config, getUserConfig } from '../../../Services/authorization'
import Loading from '../../../widget/Loading'

const RemoveVehicleAccountScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleRemoveVehicle = async()=> {
    setIsLoading(true);
    try {
      const response = await axios.delete(baseURL + "vehicle/delete-vehicle/", getUserConfig)
      if(response.status === 200){
        setIsLoading(false)
        console.log("Car deleted succesfully")
        Alert.alert("Deleted ✔")
      } else {
        setIsLoading(false)
        console.log("Something went wrong")
        Alert.alert("❌❌❌","An error occured while trying to delete your car, Please try again")
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      Alert.alert("❌❌❌","Something went wrong")
    }
  }

  if (isLoading) return <Loading />
  return (
    <View className='flex flex-1 bg-white px-4 justify-between mb-4'>
      <View>
        <View className='space-y-2' style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Kia Sportage (SUV)</Text>
            <Text>Please provide the required documents for this
            vehicle.</Text>
        </View>
        <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}}>
            <UnderReviewItem title={"Registration Certificate (RC)"} text={"Under review"} />
        </View>
      </View>
      <View className='flex items-center'>
        <TouchableOpacity onPress={()=> handleRemoveVehicle()} className='border-[2px] border-red-600 rounded-lg items-center justify-center' style={{width: Responsiveness.getResponsiveWidth(90), height: Responsiveness.getResponsiveWidth(12)}}><Text className='text-red-600'>Remove Vehicle</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default RemoveVehicleAccountScreen