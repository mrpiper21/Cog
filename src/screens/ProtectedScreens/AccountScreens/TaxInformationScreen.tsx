import { View, Text } from 'react-native'
import React from 'react'
import HelpItem from '../../../component/Help/HelpItem'

const TaxInformationScreen = () => {
  return (
    <View className='flex-1 bg-white'>
      <HelpItem type='forward-title-children' title={"Tax Settings"} children={"Keep your tax information up to date."} />
      <HelpItem type='forward-title-children' title={"Tax Summaries"} children={"Track your earnings, expenses, and net payout."} />
      <HelpItem type='forward-title-children' title={"Tax Forms"} children={"For filling your annual tax return"} />
    </View>
  )
}

export default TaxInformationScreen