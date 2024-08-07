import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
  Dimensions
} from "react-native";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import React, { useRef, useMemo, useState, useEffect } from "react";
import * as Location from 'expo-location';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AntDesign, MaterialIcons, Ionicons, FontAwesome6 } from "@expo/vector-icons";
import Responsiveness from "../../../helpers/Responsiveness";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import { LocationContext } from "../../../hooks/LocationContext/LocationHook";
import DriverMarker from "../../../component/Home/Markers/DriverMarker";
import BottomSheetItem from "../../../component/BottomSheetItem";
import ToggleUserActiveLocation from "../../../component/Home/ToggleUserActiveLocation";
import NavBarIcon from './../../../component/Home/NavBarIcon';
import MapViewDirectionItem from "../../../component/Home/MapViewDirectionItem";
import { locationOfInterest } from "../../../Mock/LocationOfInterest";

const HomeScreen = ({route}: any): React.JSX.Element => {
  const location = route.params?.location
  // console.log("search loction...", location)
  const mapRegion = React.useContext(LocationContext);
  const mapRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation() as any;
  const [searchView, setSearchView] = useState(false);
  // const [LOCATION, SETLOCATION] = useState()
  // const [dragableMarker, setDragableMarker] = useState(mapRegion.mapRegion);
  const [routeInfo, setRouteInfo] = useState(false)
  const [isOnline, setIsOnline] = useState(false);
  const [coordinates, setCoordinates] = useState([
    { latitude: 37.3317876, longitude: -122.0054812 },
    { latitude: 37.771707, longitude: -122.4053769 },
  ]);
  const [driverLocation, setDriverLocation] = useState<any>(null);
 
  const onMapPress = (e: any) => {
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
  };

  useEffect(() => {
    Location.getLastKnownPositionAsync()
      .then((Location) => {
        // console.log("current location...", Location)
        setDriverLocation({
          latitude: Location?.coords.latitude,
          longitude: Location?.coords.longitude,
        });
      })
      .catch((error) => console.error('Error getting location:', error));
  }, [Location, driverLocation]);

  useEffect(() => {
    if(location){
      setRouteInfo(true)
    }
  }, [location]);
  

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
        initialRegion={mapRegion?.mapRegion}
        followsUserLocation={true}
         // onRegionChange={onRegionChange}
        showsBuildings={true}
        // userLocationUpdateInterval={5000}
        // showsUserLocation={isOnline ? false : true}
        userLocationPriority="high"
        region={mapRegion?.mapRegion}
        style={styles.map}
        ref={mapRef}
        onPress={onMapPress}
      >
        {/* {coordinates.map((coordinate, index) => (
        <Marker key={`coordinate_${index}`} coordinate={coordinate} />
      ))} */}

      {location && <MapViewDirectionItem orginCoordinates={driverLocation} destinationCoordinates={location} />}
      {location && <Marker coordinate={{longitude: location.lng, latitude: location.lat}}>
          <Image source={require("../../../../assets/destinationIcon.png")}/>
        </Marker>}
        {/* {showLocationOfInterest()} */}
          {driverLocation && <Marker coordinate={driverLocation}>
            <DriverMarker />
          </Marker>}
        {/* {location && <Marker coordinate={{latitude: location.lat, longitude: location.lng}}/>} */}
      </MapView>
      <BottomSheetItem bottomSheetRef={bottomSheetRef}/>
      <NavBarIcon />
      <TouchableOpacity
        onPress={() => setSearchView(!searchView)}
        style={styles.searcBar}
      >
        <AntDesign name="search1" size={wp(6)} color="black" />
      </TouchableOpacity>
      {routeInfo && 
      <View style={{height: Responsiveness.getResponsiveHeight(18), width: Responsiveness.getResponsiveWidth(100), backgroundColor: "#4460EF", marginTop: hp(4), position: 'absolute'}} className="justify-center">
        <View style={{paddingVertical: Responsiveness.getResponsiveHeight(1), paddingHorizontal: Responsiveness.getResponsiveWidth(5), borderBottomWidth: 0.5, borderBottomColor: "white"
        }} className="flex-row items-center space-x-2">
          <View>
            <Image source={require("../../../../assets/directionIcon.png")}/>
            <Text className="text-white">Distance</Text>
          </View>
          <Text className="text-xl text-white font-bold">Loaction</Text>
        </View>
        <View style={{paddingVertical: Responsiveness.getResponsiveHeight(1),  paddingHorizontal: Responsiveness.getResponsiveWidth(5)}} className="flex-row items-center space-x-3">
          <FontAwesome6 name="location-dot" size={24} color="white" />
          <View>
            <Text className="text-white">Pickup on Fairlands Drive</Text>
            <Text className="text-white">Near Orchard View</Text>
          </View>
        </View>
      </View>}
      
      {/* <TouchableOpacity style={styles.navigationIcon}>
        <Image source={require("../../../../assets/navigateIcon.png")}/>
        <Text className="text-white">Navigate</Text>
      </TouchableOpacity> */}
      <ToggleUserActiveLocation mapRegion={mapRegion} mapRef={mapRef}/>
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
  navigationIcon: {
    position: "absolute",
    height: Responsiveness.getResponsiveWidth(15),
    width: Responsiveness.getResponsiveWidth(30),
    borderRadius: Responsiveness.getResponsiveWidth(10),
    backgroundColor: "#4460EF",
    alignItems: "center",
    paddingHorizontal: Responsiveness.getResponsiveWidth(4),
    gap: Responsiveness.getResponsiveWidth(4),
    bottom: Responsiveness.getResponsiveHeight(15),
    flexDirection: 'row',
    marginLeft: Responsiveness.getResponsiveWidth(65),
  },
});

//248632
