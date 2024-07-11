import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../../widget/Header'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import { FontAwesome } from '@expo/vector-icons';
import Responsiveness from '../../../../helpers/Responsiveness';
import pickImage from '../../../../Global/PickImage';
import { Dropdown } from 'react-native-element-dropdown';
import DropdownInput from '../../../../widget/DropdownInput';
import Btn from '../../../../widget/Btn';
import { ColorOptions, MakeOptions, YearOptions } from '../../../../Data/Options';

const AddPersonalCarScreen = () => {
    const [image, setImage] = useState<string | any>(null)
    const [imageArr, setImagArr] = useState<string[]>([]);

    // const addImage = (newImage: string) => {
    //     setImagArr([...imageArr, newImage]);
    //   };

      // useEffect(()=> {
      //   addImage(image)
      //   console.log(image)
      //   console.log(imageArr[1])
      // }, [image])
  return (
    <ScrollView className='flex flex-1 bg-white px-4'>
      <Header type='BackButton-Children' children={"Add Personal Car"} />
      <ProgressBar/>
        <View>
            <Text className='font-bold'>Car Images</Text>
        </View>
        <View className={`${image && "flex flex-row space-x-2 mt-4"}`}>
            <View className='flex flex-row gap-4'>
                {imageArr.length > 1 && imageArr.map((imgUrl)=> (
                        <Image className='rounded-lg' style={{width: Responsiveness.getResponsiveWidth(15), height: Responsiveness.getResponsiveWidth(15)}} source={{uri: image}} />
                    ))}
            </View>
            <TouchableOpacity disabled={imageArr.length >= 3 && true} onPress={()=> pickImage('gallery', setImage)} className='flex items-center justify-center bg-[#EEEE] rounded-lg' style={{width: Responsiveness.getResponsiveWidth(15), height: Responsiveness.getResponsiveWidth(15)}}>
                <FontAwesome name="camera" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <DropdownInput placeholder='Select Make' label={"Make"} data={MakeOptions} />
        <DropdownInput placeholder='Select Year' label={"Year"} data={YearOptions} />
        <DropdownInput placeholder='Select Color' label={"Color"} data={ColorOptions} color={true}/>
        <DropdownInput placeholder='Select Number of Doors' label={"Number of Doors"}/>
        <DropdownInput placeholder='Select Number of Seat Belts' label={"Number of Seat Belts"}/>
        <DropdownInput placeholder='Select Vehicle Type' label={"Vehicle Type"}/>
        <DropdownInput placeholder='Vehicle has a Wheelchair Accessible Ramp' label={"Select Wheelchair Accessible Ramp "}/>

        <View style={{marginVertical: Responsiveness.getResponsiveWidth(5)}} className='items-center mx-5'>
            <Btn type='action' label={"Next"} />
        </View>
    </ScrollView>
  )
}

export default AddPersonalCarScreen