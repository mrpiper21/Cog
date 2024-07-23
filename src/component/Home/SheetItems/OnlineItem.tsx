import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { AntDesign, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

// interface Props {
//     callback: ()=> void
// }

const OnlineItem /*React.FC<Props>*/= () => {
    const navigation = useNavigation() as any
    const [isOnline, setIsOnline] = useState(false)

    const goOnline = () => {
        setIsOnline(!isOnline);
      };
  return (
    <View style={styles.bottomSheetContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
              {/* <Ionicons name="options-outline" size={wp(8)} color="black" /> */}
              <Image
                source={require("../../../../assets/preferenceIcon.png")}
                style={{ width: 40, height: 30 }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => goOnline()}
                style={
                  isOnline
                    ? [styles.goOnlineBtn, { backgroundColor: "red" }]
                    : styles.goOnlineBtn
                }
              >
                <Text style={{ color: "white" }}>
                  {isOnline ? "Go Offline" : "Go Online"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  isOnline
                    ? [styles.arrowBtn, { backgroundColor: "red" }]
                    : styles.arrowBtn
                }
              >
                <MaterialIcons
                  name="arrow-outward"
                  size={wp(8)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Recommendation")}
            >
              <AntDesign name="bars" size={wp(8)} color="black" />
            </TouchableOpacity>
          </View>
  )
}

export default OnlineItem

const styles = StyleSheet.create({
    container: {
      // flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
    twoBarIcon: {
      position: "absolute",
      height: wp(10),
      width: wp(10),
      marginTop: hp(5),
      marginLeft: hp(3),
      borderRadius: wp(10),
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    searcBar: {
      position: "absolute",
      height: wp(10),
      width: wp(10),
      marginTop: hp(5),
      borderRadius: wp(10),
      marginLeft: wp(85),
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    locationIcon: {
      position: "absolute",
      height: wp(10),
      width: wp(10),
      borderRadius: wp(10),
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      bottom: hp(15),
      marginLeft: wp(85),
    },
    goOnlineBtn: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      height: hp(7),
      width: wp(45),
      backgroundColor: "#4460EF",
      borderTopLeftRadius: wp(2),
      borderBottomLeftRadius: wp(2),
    },
    arrowBtn: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      borderLeftWidth: 1,
      borderColor: "white",
      height: hp(7),
      width: wp(15),
      backgroundColor: "#4460EF",
      borderTopRightRadius: wp(2),
      borderBottomRightRadius: wp(2),
    },
    bottomSheetContainer: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  });
  