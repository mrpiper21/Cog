import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useRef, useMemo, useState, useEffect } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import * as Location from "expo-location";

const HomeScreen = (): React.JSX.Element => {
  const mapRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation() as any;
  const [searchView, setSearchView] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    longitude: 37.78825,
    latitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    mapRef.current?.animateToRegion(mapRegion);
  };

  useEffect(() => {
    const func = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.prompt("Error", "There was an error getting your location");
      }
      let location = await Location.getCurrentPositionAsync();
      setMapRegion((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    };
    func();
  }, [setMapRegion]);

  const snapPoints = useMemo(() => ["12%"], []);

  return searchView ? (
    <SearchScreen setSearch={setSearchView} />
  ) : (
    <View style={styles.container}>
      <MapView
        showsTraffic={true}
        showsBuildings={true}
        userLocationUpdateInterval={5000}
        showsUserLocation={true}
        followsUserLocation={true}
        userLocationPriority="high"
        // provider={PROVIDER_GOOGLE}
        region={mapRegion}
        style={styles.map}
        ref={mapRef}
        // showsMyLocationButton
      >
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
      <View style={{ position: "absolute", marginTop: wp(20) }}></View>
      <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetView>
          <View style={styles.bottomSheetContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
              <Ionicons name="options-outline" size={wp(8)} color="black" />
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Recommendation")}
            >
              <AntDesign name="bars" size={wp(8)} color="black" />
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.twoBarIcon}
      >
        <Ionicons name="reorder-two-outline" size={wp(8)} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSearchView(!searchView)}
        style={styles.searcBar}
      >
        <AntDesign name="search1" size={wp(6)} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={userLocation} style={styles.locationIcon}>
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
