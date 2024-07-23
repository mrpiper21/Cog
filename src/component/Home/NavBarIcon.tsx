import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Responsiveness from '../../helpers/Responsiveness'

const NavBarIcon = () => {
    const navigation = useNavigation() as any
  return (
    <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.twoBarIcon}
      >
        <Ionicons name="reorder-two-outline" size={Responsiveness.getResponsiveWidth(8)} color="black" />
      </TouchableOpacity>
  )
}

export default NavBarIcon

const styles = StyleSheet.create({
    twoBarIcon: {
        position: "absolute",
        height: Responsiveness.getResponsiveWidth(10),
        width: Responsiveness.getResponsiveWidth(10),
        marginTop: Responsiveness.getResponsiveHeight(5),
        marginLeft: Responsiveness.getResponsiveHeight(3),
        borderRadius: Responsiveness.getResponsiveWidth(10),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }
})