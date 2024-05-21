import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import React, { useRef, useMemo, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";

const HomeScreen = (): React.JSX.Element => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation() as any;
  const [searchView, setSearchView] = useState(false);

  const snapPoints = useMemo(() => ["12%"], []);

  return searchView ? (
    <SearchScreen setSearch={setSearchView} />
  ) : (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={{ position: "absolute", marginTop: wp(20) }}></View>
      <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetView>
          <View style={styles.bottomSheetContainer}>
            <Ionicons name="options-outline" size={wp(8)} color="black" />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.goOnlineBtn}>
                <Text style={{ color: "white" }}>Go Online</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.arrowBtn}>
                <MaterialIcons
                  name="arrow-outward"
                  size={wp(8)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <AntDesign name="bars" size={wp(8)} color="black" />
          </View>
        </BottomSheetView>
      </BottomSheet>
      <TouchableOpacity style={styles.twoBarIcon}>
        <Ionicons name="reorder-two-outline" size={wp(8)} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSearchView(!searchView)}
        style={styles.searcBar}
      >
        <AntDesign name="search1" size={wp(6)} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationIcon}>
        <MaterialIcons name="my-location" size={wp(8)} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
