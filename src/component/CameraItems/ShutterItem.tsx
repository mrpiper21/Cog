import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

  interface SutterProps {
    takePic: ()=> void
  }

const ShutterItem: React.FC<SutterProps> = ({takePic}) => {
  return (
    <TouchableOpacity
          style={{ width: wp(20), height: wp(20) }}
          className="items-center justify-center border-2 border-[#4460EF] rounded-full m-2 mb-4"
          onPress={takePic}
    >
        <View
            style={{ width: wp(17), height: wp(17) }}
            className=" bg-[#4460EF] rounded-full"
        />
    </TouchableOpacity>
  )
}

export default ShutterItem