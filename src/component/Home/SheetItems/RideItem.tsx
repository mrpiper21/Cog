import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeable from 'react-native-swipeable-item';
import Responsiveness from '../../../helpers/Responsiveness';
const RideItem = (/*{ rideDetails, onAcceptRide }: any*/) => {
  const [isSwiping, setIsSwiping] = useState(false);

  const rightActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.8],
    });
    const opacity = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });
    return (
      <View style={[styles.rightAction, { transform: [{ scale }] }]}>
        <Text style={[styles.rightActionText, { opacity }]}>Accept</Text>
      </View>
    );
  };

//   const onRightActionRelease = () => {
//     onAcceptRide(rideDetails);
//   };

  return (
    <View className='items-center justify-center'>
    <Swipeable
      onSwipeStart={() => setIsSwiping(true)}
      onSwipeEnd={() => setIsSwiping(false)}
      renderRightActions={rightActions}
    //   onRightActionRelease={/*onRightActionRelease*/}
      rightActionOpenProgress={isSwiping ? 1 : 0}
      style={styles.rideItem}
    >
      <View className='bg-blue-200'>
        {/* Display ride details here */}
        {/* <Text style={styles.rideInfoText}>
          Ride from: {/rideDetails.pickupLocation}
        </Text>
        <Text style={styles.rideInfoText}>
          Ride to: {rideDetails.dropoffLocation}
        </Text> */}
        <Text>Hellow</Text>
      </View>
    </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  rideItem: {
    backgroundColor: 'red',
    height: 500,
    width: 500
  },
  rideInfo: {
    flex: 1,
  },
  rideInfoText: {
    fontSize: 16,
  },
  rightAction: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: Responsiveness.getResponsiveWidth(20),
    height: Responsiveness.getResponsiveWidth(20),
  },
  rightActionText: {
    color: 'blue',
    fontSize: 18,
  },
});

export default RideItem;
