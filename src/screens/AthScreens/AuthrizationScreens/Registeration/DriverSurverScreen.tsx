import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import SurveyItem from '../../../../component/Registeration/SurveyItem'
import Btn from '../../../../widget/Btn'
import { WhyDriveGlopilots, HowManyHours, WhenToDrive, ApplyToDriveWihtOtherApp } from '../../../../component/Registeration/SurveyItem'
import { useNavigation } from '@react-navigation/native'

const DriverSurverScreen = () => {
    const navigation = useNavigation() as any;
    const [SuveyState, setSurveyState] = React.useState({
        WhyDriveGlopilots,
        HowManyHours,
        WhenToDrive,
        ApplyToDriveWihtOtherApp
    })
    const handleWhyDriveGlopilots = (id: number) => {
        console.log("handling callback");
        setSurveyState((prev) => ({
          ...prev,
          WhyDriveGlopilots: prev.WhyDriveGlopilots.map((data) =>
            data.id === id ? { ...data, checked: false } : data
          ),
        }));
      };
    const handleHowManyHours = (id: number) => {
        console.log("handling callback");
        setSurveyState((prev) => ({
          ...prev,
          HowManyHours: prev.HowManyHours.map((data) =>
            data.id === id ? { ...data, checked: false } : data
          ),
        }));
      };
    const handleWhenToDrive = (id: number) => {
        console.log("handling callback");
        setSurveyState((prev) => ({
          ...prev,
          WhenToDrive: prev.WhenToDrive.map((data) =>
            data.id === id ? { ...data, checked: false } : data
          ),
        }));
      };
    const handleApplyToDriveWihtOtherApp = (id: number) => {
        console.log("handling callback");
        setSurveyState((prev) => ({
          ...prev,
          ApplyToDriveWihtOtherApp: prev.ApplyToDriveWihtOtherApp.map((data) =>
            data.id === id ? { ...data, checked: false } : data
          ),
        }));
      };
      
      
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='flex flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Header type='Back-Button' />
      </View>
      <ProgressBar/>
      <View>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
            Why do you want to drive with
            GloPilots?
        </Text>

        <View>
            {SuveyState.WhyDriveGlopilots?.map((data: any)=> (
                <SurveyItem key={data.id} type='rounded' children={data.text} isChecked={data.checked} callback={handleWhyDriveGlopilots} id={data.id} />
            ))}
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        How many hours are looking to drive
        each week?
        </Text>

        <View>
            {SuveyState.HowManyHours?.map((data)=> (
                <SurveyItem key={data.id} type='rounded' children={data.text} isChecked={data.checked} callback={handleHowManyHours} id={data.id}/>
            ))}
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        When do you want to drive?
        </Text>

        <View>
            {SuveyState.WhenToDrive.map((data)=> (
                <SurveyItem key={data.id} type='box' children={data.text} isChecked={data.checked} id={data.id} />
            ))}
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        Are you applying to drive with any
        other app?
        </Text>

        <View>
            {SuveyState.ApplyToDriveWihtOtherApp.map((data)=> (
                <SurveyItem key={data.id} type="rounded" children={data.text} isChecked={data.checked}id={data.id} />
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