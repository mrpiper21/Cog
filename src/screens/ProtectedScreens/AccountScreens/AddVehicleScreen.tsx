import { View, Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import Responsiveness from '../../../helpers/Responsiveness'
import DropdownInput from '../../../widget/DropdownInput'
import Btn from '../../../widget/Btn'
import { useNavigation } from '@react-navigation/native'
import { CarInfoType } from '../../AthScreens/AuthrizationScreens/Registeration/AddPersonalCarScreen'
import InputTextItem from '../../../widget/InputTextItem'
import { MakeOptions, YearOptions, ModelOptions } from '../../../Mock/Options'
import axios from 'axios'
import { baseURL, config, getUserConfig } from '../../../Services/authorization'
import { useUserContext } from '../../../hooks/Usercontext/UserContext'
import Loading from '../../../widget/Loading'

export interface VehicleType {
  make: string,
  model: string,
  year: number,
}

// interface Vehicle {
//   type?: string;
//   year?: number;
//   make?: string;
//   model?: string;
//   color?: string;
//   noOfDoors?: number;
//   seats?: number;
//   vehicleType?: string;
//   wheelChairRamp?: boolean;
//   picture?: string;
//   isAvailable?: boolean;
//   isApproved?: boolean;
// }

const AddVehicleScreen = () => {
    const navigation = useNavigation() as any;
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const User = useContext(useUserContext)
    const [carDetails, setCarDetails] = useState<VehicleType>({
      make: "",
      model: "",
      year: 0,
    })
    const [LicenseNumber, setLicenseNumber] = useState<string>("")

    const handleLicenseNumberChange = (text: string)=> {
      console.log(text)
      setLicenseNumber(text)
    }

    const handleVehicleSubmit = async ()=> {
      setIsLoading(true)
      const CarInfo = {...carDetails, licenseNumber: LicenseNumber};
      try {
        const response = await axios.put(baseURL + "vehicle/vehicle" + User?.user._id, CarInfo, getUserConfig)
        if(response.status === 200) {
          setIsLoading(false)
          console.log("success")
          Alert.alert("Succes")
        } else {
          setIsLoading(false)
          console.log("There was an error")
          Alert.alert("Ther was an error")
        }
      } catch(error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert("An error occured")
      }
    }

    if(isLoading) return <Loading />

  return (
    <View className='flex flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveHeight(2)}} className='flex space-y-2'>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(4), fontWeight: '700'}}>Vehicle Requirements</Text>
        <Text>To drive with Glopilots, your vehicle must be from
            2012 or a newer model that is not salvaged. Explore
            the eligible vehicle makes and models approved for
            driving with Glopilots in your city.
            </Text>
      </View>
      <Text style={{marginVertical: Responsiveness.getResponsiveHeight(2), fontSize: Responsiveness.getResponsiveWidth(3.3), fontWeight: '700'}}>Vehicle Information</Text>
      <DropdownInput name={"Make"} placeholder='Select Make' label={"Make"} value={carDetails.make} setValue={setCarDetails} data={MakeOptions} />
      <DropdownInput name={"Model"} placeholder='Select Model' label={"Model"} value={carDetails.model} setValue={setCarDetails} data={ModelOptions}/>
      <DropdownInput name={"Year"} placeholder='Select Year' label={"Year"} value={carDetails.year} setValue={setCarDetails} data={YearOptions}/>
      <InputTextItem TextOnChangeCallback={handleLicenseNumberChange} placeHolderText='Type License plate number' />
      <View style={{marginTop: Responsiveness.getResponsiveHeight(3), alignItems: 'center'}}>
        <Btn type='action' label={"Continue"} callback={()=>handleVehicleSubmit()}/>
      </View>
    </View>
  )
}

export default AddVehicleScreen