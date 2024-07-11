import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../../../widget/Header'
import { TextInput } from 'react-native-gesture-handler'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Checkbox from 'expo-checkbox';
import Btn from '../../../../widget/Btn';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../../../hooks/Usercontext/UserContext';
import ButtonLoader from '../../../../widget/ButtonLoader';
const LoginScreen = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<{email: String, password: String}>({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const User = useContext(useUserContext);
    const navigation = useNavigation() as any;
  return (
    <View className='flex flex-1 bg-white px-4'>
        <Header type='Back-Button' />
        <View className='flex space-y-4 mt-4'>
            <View className='flex space-y-2'>
                <Text className='text-lg font-bold'>Phone number or email</Text>
                <TextInput onChangeText={(e=> setUserInfo((prev)=> ({
                    ...prev,
                    email: e
                })))} className=' w-[99%] p-4 border-2 border-[#EEEE] rounded-xl' placeholder='Enter email or phone number' />
            </View>
            <View className='flex space-y-2'>
                <Text className='text-lg font-bold'>Password</Text>
                <TextInput onChangeText={(e)=> setUserInfo((prev)=> ({
                    ...prev,
                    password: e,
                }))} className=' w-[99%] p-4 border-2 border-[#EEEE] rounded-xl' placeholder='Enter email or phone number' />
            </View>
        </View>
        <View className='flex space-y-1 my-4'>
            <Text className='text-lg font-bold'>Account type</Text>
            <View className='flex flex-row gap-4 items-center'>
                <TouchableOpacity style={{borderWidth: 1, borderColor: "#4460EF"}} className='p-4 rounded-lg items-center justify-center'>
                    <Text className='text-[#4460EF]'>Driver</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{borderWidth: 1}} className='p-4 rounded-lg items-center justify-center'>
                    <Text>Vendor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth: 1}} className='p-4 rounded-lg items-center justify-center'>
                    <Text>Hospitality</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth: 1}} className='p-4 rounded-lg items-center justify-center'>
                    <Text>Car owner</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className='flex flex-row items-center justify-between'>
            <View className='flex flex-row items-center'>
                <Checkbox
                    style={styles.checkbox}
                    value={checked}
                    onValueChange={()=> setChecked(!checked)}
                    color={checked ? "#4630EB" : undefined}
                />
                <Text>Remember me</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("forgot-password")}>
                <Text className='text-[#4460EF]'>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginVertical: wp(5), alignItems: 'center'}}>
            <Btn type={isLoading ?'cancel': 'action'} label={isLoading ? undefined : "Login"} loader={ButtonLoader} callback={()=> User?.loginUser(userInfo.email, setIsLoading)} />
        </View>
        <View className='flex flex-row items-center justify-center'>
            <View style={{backgroundColor: 'black', height: 1, width: wp(30)}} />
            <Text className='mx-2'>or continue with</Text>
            <View style={{backgroundColor: 'black', height: 1, width: wp(30)}} />
        </View>

        <View style={{marginTop: wp(2)}} className='flex flex-row items-center justify-center gap-6'>
            <TouchableOpacity className='px-12 py-3 bg-[#EEEE] rounded-lg'>
                <Image source={require("../../../../../assets/icons/AppleIcon.png")} />
            </TouchableOpacity>
            <TouchableOpacity className='px-12 py-3 bg-[#EEEE] rounded-lg'>
                <Image source={require("../../../../../assets/icons/GoogleIcon.png")} />
            </TouchableOpacity>
            <TouchableOpacity className='px-12 py-3 bg-[#EEEE] rounded-lg'>
                <Image source={require("../../../../../assets/icons/FacebookIcon.png")} />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: wp(35), bottom: 2}} className='flex flex-row items-center justify-center'>
            <Text>Don't have an account yet?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("register-email")}><Text className='text-[#4460EF]'> Sign up</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    checkbox: {
      margin: 8,
      height: wp(5),
      width: wp(5),
      borderRadius: 5,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "lightgray",
      height: hp(10),
      paddingHorizontal: wp(3),
      borderRadius: wp(2),
    },
  });
  