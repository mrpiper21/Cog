import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useRef, useMemo } from 'react'
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet'
import ToggleActiveUserItem from './Home/SheetItems/ToggleActiveUserItem'
import SetDestinationItem from './Home/SheetItems/SetDestinationItem'
import StartRideItem from './Home/SheetItems/StartRideItem'
import AccetRIdeItem from './Home/SheetItems/AccetRIdeItem'

interface BottomSheetProps {
  bottomSheetRef: React.Ref<BottomSheet>
  // state: "Set-destination" | "toggleActive-user" | "Accept-ride" | "Start-ride" | "Ride-info"
}

//10% - toggle active user && Ride Info
// 30% - set destination
// 45% - Accept ride
// 30% -  Start ride

const BottomSheetItem: React.FC<BottomSheetProps> = ({bottomSheetRef}) => {
  const snapPoints = useMemo(() => ["30%"], []);
  return (
    <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetView>
          <StartRideItem />
          {/* <AccetRIdeItem /> */}
          {/* <ToggleActiveUserItem /> */}
        </BottomSheetView>
      </BottomSheet>
  )
}

export default BottomSheetItem