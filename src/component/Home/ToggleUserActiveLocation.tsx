import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useRef} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Responsiveness from '../../helpers/Responsiveness';
import MapView from 'react-native-maps';

interface props {
    mapRegion: any;
    mapRef: React.Ref<MapView>
}

const ToggleUserActiveLocation: React.FC<props> = ({ mapRegion , mapRef}) => {
    const userLocation = async () => {
        mapRef?.current?.animateToRegion(mapRegion.mapRegion);
      };
  return (
    <TouchableOpacity onPress={userLocation} style={styles.locationIcon}>
        <MaterialIcons name="my-location" size={Responsiveness.getResponsiveWidth(8)} color="black" />
      </TouchableOpacity>
  )
}

export default ToggleUserActiveLocation

const styles = StyleSheet.create({
    locationIcon: {
        position: "absolute",
        height: Responsiveness.getResponsiveWidth(10),
        width: Responsiveness.getResponsiveWidth(10),
        borderRadius: Responsiveness.getResponsiveWidth(10),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        bottom: Responsiveness.getResponsiveHeight(15),
        marginLeft: Responsiveness.getResponsiveWidth(85),
      },
})