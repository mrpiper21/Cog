import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useRef } from 'react'
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet'
import OnlineItem from './Home/SheetItems/OnlineItem'

interface BottomSheetProps {
  bottomSheetRef: React.Ref<BottomSheet>
  snapPoints: (string | number)[]

}
const BottomSheetItem: React.FC<BottomSheetProps> = ({bottomSheetRef, snapPoints}) => {
  return (
    <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetView>
          <OnlineItem />
        </BottomSheetView>
      </BottomSheet>
  )
}

export default BottomSheetItem