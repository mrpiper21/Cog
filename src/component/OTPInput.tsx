import { View, TextInput,  } from 'react-native'
import React, {useState} from 'react'

const OTPInput = () => {
    const [inputOnActive, setInputOnActive] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false
    })
  return (
    <TextInput  onFocus={()=> {setInputOnActive((prev)=> ({
        ...prev,
        first: true
    }))}} keyboardType="numeric" style={{backgroundColor: inputOnActive.first ? "white" : "#EEEE", borderWidth: inputOnActive.first ? 1 : 0, borderColor: inputOnActive.first ? '#4460EF' : "white"}} className='py-4 px-8 rounded-lg' />
  )
}

export default OTPInput