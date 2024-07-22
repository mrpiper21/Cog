import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
} from "react-native";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import React, { useRef, useMemo, useState, useEffect } from "react";
import * as Location from 'expo-location';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AntDesign, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import { LocationContext } from "../../../hooks/Usercontext/LocationHook";
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from "../../../Services/authorization";

const HomeScreen = (): React.JSX.Element => {
  const mapRegion = React.useContext(LocationContext);
  const mapRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation() as any;
  const [searchView, setSearchView] = useState(false);
  const [dragableMarker, setDragableMarker] = useState(mapRegion.mapRegion);
  const [isOnline, setIsOnline] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [driverLocation, setDriverLocation] = useState<any>(null);
  const [pickupPoint, setPickupPoint] = useState({ latitude: 37.7749, longitude: -122.4194 });
  const userLocation = async () => {
    mapRef.current?.animateToRegion(mapRegion.mapRegion);
  };

  let locationOfInterest = [
    {
      title: "First",
      loaction: {
        latitude: 5.65531261192447,
        longitude: -0.1846793107688,
      },
      description: "My first marker",
    },
    {
      title: "second",
      loaction: {
        latitude: 5.652918042212605,
        longitude: -0.18952036276,
      },
      description: "My second marker",
    },
    {
      title: "third",
      loaction: {
        latitude: 5.65730212914574,
        longitude: -0.181071739643,
      },
      description: "My third marker",
    },
    {
      title: "third",
      loaction: {
        latitude: 5.643699360367113,
        longitude: -0.181071739643,
      },
      description: "My third marker",
    },
  ];

  useEffect(() => {
    // Get the driver's location (you can use more accurate methods)
    Location.getCurrentPositionAsync()
      .then((location) => {
        setDriverLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })
      .catch((error) => console.error('Error getting location:', error));
  }, []);

  const pickpPoint = { latitude: 37.7749, longitude: -122.4194 }
         const destination = { latitude: 34.0522, longitude: -118.2437 };

  const showLocationOfInterest = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.loaction}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  const snapPoints = useMemo(() => ["12%"], []);

  // const onRegionChange = (region: any) => {
  //   console.log(region);
  // };

  const goOnline = () => {
    setIsOnline(!isOnline);
  };

  return searchView ? (
    <SearchScreen
      // setSearchLoction={setSearchedLocation}
      setSearch={setSearchView}
    />
  ) : (
    <View style={styles.container}>
      <SafeAreaView>
      <MapView
        initialRegion={mapRegion.mapRegion}
        followsUserLocation={true}
         // onRegionChange={onRegionChange}
        showsBuildings={true}
        userLocationUpdateInterval={5000}
        showsUserLocation={isOnline ? false : true}
        showsCompass={false}
        userLocationPriority="high"
        region={mapRegion.mapRegion}
        style={styles.map}
        ref={mapRef}
      >
         
        {driverLocation && <Marker coordinate={driverLocation} title="Driver" />}
      {pickupPoint && <Marker coordinate={pickupPoint} title="Pickup Point" />}
      {driverLocation && pickupPoint && (
        <Polyline
          coordinates={[driverLocation, pickupPoint]}
          strokeColor="#3498db"
          strokeWidth={3}
        />
      )}

        {/* <MapViewDirections
          origin={pickupPoint}
          destination={driverLocation}
          apikey={API_KEY}
          strokeWidth={3}
          strokeColor="blue"
        /> */}
        <Marker
          pinColor="#0000ff"
          coordinate={mapRegion.mapRegion}
          title="Marker"
          onDragEnd={(e: any) => setDragableMarker(e.nativeEvent.coordinate)}
        >
          <Callout>
            {/* <MaterialIcons name="location-city" size={24} color="black" /> */}
            <Entypo name="home" size={30} color="#028391" />
          </Callout>
        </Marker>
        {/* {showLocationOfInterest()} */}
        {isOnline && (
          <Marker coordinate={mapRegion.mapRegion}>
            <Callout>
              <Image source={require("../../../../assets/userNavigator.png")} />
            </Callout>
          </Marker>
        )}
        {/* <Marker coordinate={searchedLocation} /> */}
      </MapView>
      <View style={{ position: "absolute", marginTop: wp(20) }}></View>
      <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetView>
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
      </SafeAreaView>
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

//248632
