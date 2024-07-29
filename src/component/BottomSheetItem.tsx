import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useRef } from 'react'
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet'
import ToggleActiveUserItem from './Home/SheetItems/ToggleActiveUserItem'
import SetDestinationItem from './Home/SheetItems/SetDestinationItem'
import AccetRIdeItem from './Home/SheetItems/AccetRIdeItem'

interface BottomSheetProps {
  bottomSheetRef: React.Ref<BottomSheet>
  snapPoints: (string | number)[]
  // state: "Set-destination" | "toggleActive-user" | "Accept-ride" | "Start-ride" | "Ride-info"
}

//10% - toggle active user && Ride Info
// 30% - set destination
// 40% - Accept ride

const BottomSheetItem: React.FC<BottomSheetProps> = ({bottomSheetRef, snapPoints}) => {
  return (
    <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetView>
          <AccetRIdeItem />
          {/* <ToggleActiveUserItem /> */}
        </BottomSheetView>
      </BottomSheet>
  )
}

export default BottomSheetItem