import { View, Text } from 'react-native'
import React from 'react'
import RideInfoItem from './SubItems/RideInfoItem'
import ToggleActiveUserItem from './ToggleActiveUserItem'
import ClientItem from './ClientItem'
// import Swipeable from 'react-native-swipeable';
import RideItem from './RideItem'


const StartRideItem = () => {
  const [rides, setRides] = React.useState([]);
  const handleAcceptRide = (ride: any) => {
    // Handle the ride acceptance logic here, e.g., update the ride status, send a notification
    console.log('Ride accepted:', ride);
  };
  return (
    <View>
        {/* <ToggleActiveUserItem type='info'/>
        <ClientItem /> */}
        <View>
        <RideItem />
        </View>
    </View>
  )
}

export default StartRideItem