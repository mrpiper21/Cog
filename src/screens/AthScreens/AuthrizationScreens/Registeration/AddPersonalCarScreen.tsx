import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Header from '../../../../widget/Header'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import { FontAwesome } from '@expo/vector-icons';
import Responsiveness from '../../../../helpers/Responsiveness';
import pickImage from '../../../../Global/PickImage';
import { Dropdown } from 'react-native-element-dropdown';
import DropdownInput from '../../../../widget/DropdownInput';
import Btn from '../../../../widget/Btn';
import { ColorOptions, DoorOptions, MakeOptions, SeatOption, YearOptions } from '../../../../Mock/Options';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ColorType } from './SelectColorScreen';

export interface CarInfoType {
    image: string,
    Make: string,
    Year: string,
    Doors: number,
    Seats: number,
    VehicleType: string
    WheelChair: string
}

const AddPersonalCarScreen = ({route}: any) => {
    const color = route.params
    const [image, setImage] = useState<string | any>(null)
    const [imageArr, setImagArr] = useState<string[]>([]);
    const navigation = useNavigation() as any;
    const bottomSheetRef = useRef<BottomSheet>(null)
    const [selectedColor, setSelectedColor] = useState<ColorType>({name: "", value: ""})
    const [carInfo, setCarInfo] = useState<CarInfoType>({
        image: "",
        Make: "",
        Year: "",
        Doors: 0,
        Seats: 0,
        VehicleType: "",
        WheelChair: "",
    })

    // const addImage = (newImage: string) => {
    //     setImagArr([...imageArr, newImage]);
    //   };

      // useEffect(()=> {
      //   addImage(image)
      //   console.log(image)
      //   console.log(imageArr[1])
      // }, [image])
      useEffect(()=> {
        bottomSheetRef.current?.forceClose()
      },[])
  return (
    <ScrollView className='flex flex-1 bg-white px-4'>
      <ProgressBar/>
        <View>
            <Text className='font-bold'>Car Images</Text>
        </View>
        <View className={`${image && "flex flex-row space-x-2 mt-4"} mt-4`}>
            <View className='flex flex-row gap-4'>
                {image && <Image className='rounded-lg' style={{width: Responsiveness.getResponsiveWidth(15), height: Responsiveness.getResponsiveWidth(15)}} source={{uri: image}} />}
            <TouchableOpacity disabled={imageArr.length >= 3 && true} onPress={()=> pickImage('gallery', setImage)} className='flex items-center justify-center bg-[#EEEE] rounded-lg' style={{width: Responsiveness.getResponsiveWidth(15), height: Responsiveness.getResponsiveWidth(15)}}>
                <FontAwesome name="camera" size={24} color="black" />
            </TouchableOpacity>
            </View>
        </View>

        <DropdownInput name={"Make"} placeholder='Select Make' label={"Make"} data={MakeOptions} value={carInfo.Make} setValue={setCarInfo} />
        <DropdownInput name={"Year"} placeholder='Select Year' label={"Year"} data={YearOptions} value={carInfo.Year} setValue={setCarInfo} />
        <TouchableOpacity disabled={color && true} onPress={()=> navigation.navigate("select-color")} style={{width: Responsiveness.getResponsiveWidth(93), paddingVertical: Responsiveness.getResponsiveWidth(3), paddingHorizontal: Responsiveness.getResponsiveWidth(4), borderWidth: 1, borderColor: 'lightgray', borderRadius: 5}}>
            {color ? (
            <View className='flex flex-row items-center space-x-3'>
                <View style={{backgroundColor: color?.value || "transparent", height: Responsiveness.getResponsiveWidth(10), width: Responsiveness.getResponsiveWidth(10), borderRadius: 30}} className={`${color.name === "White" && "border-[2px] border-gray-400"}`} />
                <Text>{color.name}</Text>
            </View>) : <Text>Select color</Text>}
            </TouchableOpacity>
        <DropdownInput name={"Doors"} placeholder='Select Number of Doors' label={"Number of Doors"} value={carInfo.Doors} data={DoorOptions} setValue={setCarInfo} />
        <DropdownInput name={"Seats"} placeholder='Select Number of Seat Belts' label={"Number of Seat Belts"} value={carInfo.Seats} data={SeatOption} setValue={setCarInfo}/>
        <DropdownInput name={"VehicleType"} placeholder='Select Vehicle Type' label={"Vehicle Type"} value={carInfo.VehicleType} setValue={setCarInfo}/>
        <DropdownInput name={"WheelChair"} placeholder='Vehicle has a Wheelchair Accessible Ramp' label={"Select Wheelchair Accessible Ramp "} value={carInfo.WheelChair} setValue={setCarInfo}/>

        <View style={{marginVertical: Responsiveness.getResponsiveWidth(5)}} className='items-center mx-5'>
            <Btn type='action' label={"Next"} callback={()=> navigation.navigate("Verification")}/>
        </View>
    </ScrollView>
  )
}

export default AddPersonalCarScreen