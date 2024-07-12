import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { useUserContext } from '../../hooks/Usercontext/UserContext';

interface ProfileViewProps {
    setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>
    image: any
}

const ProfileView: React.FC<ProfileViewProps> = ({setModalVisible, image}) => {
    const User = React.useContext(useUserContext)
    // const in
  return (
    <View style={{ alignItems: "center", marginTop: wp(8) }}>
        <View>
          {/* <Image
            style={styles.ImageItem}
            source={{
              uri: `${baseURL}${User?.user.email}`,
            }}
          /> */}
          {image ? (
            <Image
              style={styles.ImageItem}
              source={{
                uri: image,
              }}
            />
          ) : (
            <EvilIcons name="user" size={150} color="black" />
          )}
          <TouchableOpacity
            disabled={setModalVisible ? false : true}
            onPress={() => setModalVisible && setModalVisible(true)}
            // onPress={() => upload("gallery")}
            style={styles.cameraIcon}
          >
            <AntDesign name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: wp(2) }}>
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>
            {User?.user.email}
          </Text>
        </View>
      </View>
  )
}

export default ProfileView

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: wp(10),
      marginHorizontal: wp(3),
    },
    editButton: {
      height: wp(10),
      width: wp(10),
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: "lightgray",
      alignItems: "center",
      justifyContent: "center",
    },
    ImageItem: {
      height: wp(25),
      width: wp(25),
      borderRadius: wp(15),
    },
    cameraIcon: {
      height: wp(9),
      width: wp(9),
      borderRadius: wp(10),
      backgroundColor: "#F5F5F5",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      right: 0,
    },
    ratingContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: wp(4),
      paddingVertical: wp(3),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#F5F5F5",
    },
    editCountryContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: wp(4),
      borderBottomWidth: 1,
      borderColor: "lightgray",
    },
    editLanguageContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: wp(4),
      marginTop: wp(5),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "lightgray",
    },
  });
  