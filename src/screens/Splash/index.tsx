import React, { useMemo, useRef } from 'react'
import { View, Text, Image } from 'react-native'
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Btn from '../../widget/Btn';
import { useNavigation } from '@react-navigation/native';
import AppLoader from '../../Global/AppLoadingState';
import { useUserContext } from '../../hooks/Usercontext/UserContext';
import { Apploader } from '../../widget/ButtonLoader';

export default function SplashScreen(){
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = useMemo(()=> ["27%"], []);
    const navigation = useNavigation() as any;
    const User = React.useContext(useUserContext);
    const isLoading = User?.Apploader().appLoading
    console.log("apploading...", isLoading)
    return <View className='flex flex-1 bg-[#4460EF] items-center justify-center'>
        <Image className='overflow-hidden' source={require("../../../assets/splashlogo.png")} />
        {isLoading ? <View className=' absolute items-centr justify-center'><Apploader /></View> : isLoading && !User?.user._id && <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
            <BottomSheetView>
                <View className='flex items-center space-y-4'>
                    <Text className='text-xl font-bold'>Let's you in</Text>
                    <View>
                        <Btn type='action' label={"login"} callback={()=> navigation.navigate("login")} />
                    </View>
                    <View>
                        <Btn type='cancel' label={"Sign up"} callback={()=> navigation.navigate("register-email")} />
                    </View>
                </View>
            </BottomSheetView>
        </BottomSheet>}
    </View>
}