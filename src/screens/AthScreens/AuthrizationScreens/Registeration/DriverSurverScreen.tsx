import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import SurveyItem from '../../../../component/Registeration/SurveyItem'
import Btn from '../../../../widget/Btn'
import { WhyDriveGlopilots, HowManyHours, WhenToDrive, ApplyToDriveWihtOtherApp } from '../../../../Mock/DriversurveyData'
import { useNavigation } from '@react-navigation/native'

const DriverSurverScreen = () => {
    const navigation = useNavigation() as any;
    const [whyDriveGlopilots, setWhyDriveGlopilots] = React.useState<number>(0)
    const [whenToDrive, setWhenToDrive] = React.useState<number>(0)
    const [applyToDriveWihtOtherApp, setApplyToDriveWihtOtherApp] = React.useState<number>(0)
    // const handleApplyToDriveWihtOtherApp = (id: number) => {
    //     console.log("handling callback");
    //     setSurveyState((prev) => ({
    //       ...prev,
    //       ApplyToDriveWihtOtherApp: prev.ApplyToDriveWihtOtherApp.map((data) =>
    //         data.id === id ? { ...data, checked: false } : data
    //       ),
    //     }));
    //   };
      
      
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='flex flex-1 bg-white px-4'>
      <ProgressBar/>
      <View>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
            Why do you want to drive with
            GloPilots?
        </Text>

        <View>
            {WhyDriveGlopilots?.map((data: any)=> (
                <SurveyItem id={data.id} key={data.id} type='rounded' children={data.text} activeItem={whyDriveGlopilots} setActiveItem={setWhyDriveGlopilots} />
            ))}
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        How many hours are looking to drive
        each week?
        </Text>

        <View>
            {HowManyHours?.map((data)=> (
                <SurveyItem key={data.id} type='box' children={data.text} id={data.id}/>
            ))}
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        When do you want to drive?
        </Text>

        <View>
            {WhenToDrive.map((data)=> (
                <SurveyItem key={data.id} type='rounded' children={data.text} activeItem={whenToDrive} setActiveItem={setWhenToDrive} id={data.id}  />
            ))}
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        Are you applying to drive with any
        other app?
        </Text>

        <View>
            {ApplyToDriveWihtOtherApp.map((data)=> (
                <SurveyItem key={data.id} type="rounded" children={data.text} activeItem={applyToDriveWihtOtherApp} setActiveItem={setApplyToDriveWihtOtherApp} id={data.id} />
            ))}
        </View>
      </View>
      <View className='items-center my-8'>
        <Btn type='action' label={"Next"} callback={()=> navigation.navigate("vehicle-ownership")}/>
      </View>
    </ScrollView>
  )
}

export default DriverSurverScreen