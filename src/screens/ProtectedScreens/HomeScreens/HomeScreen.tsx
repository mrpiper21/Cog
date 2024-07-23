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
import { AntDesign, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import { LocationContext } from "../../../hooks/Usercontext/LocationHook";
import DriverMarker from "../../../Global/DriverMarker";
import BottomSheetItem from "../../../component/BottomSheetItem";
import ToggleUserActiveLocation from "../../../component/Home/ToggleUserActiveLocation";
import NavBarIcon from './../../../component/Home/NavBarIcon';
import MapViewDirectionItem from "../../../component/Home/MapViewDirectionItem";

const HomeScreen = ({route}: any): React.JSX.Element => {
  const location = route.params?.location
  console.log("search loction...", location)
  const mapRegion = React.useContext(LocationContext);
  const mapRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation() as any;
  const [searchView, setSearchView] = useState(false);
  const [dragableMarker, setDragableMarker] = useState(mapRegion.mapRegion);
  const [isOnline, setIsOnline] = useState(false);
  const [coordinates, setCoordinates] = useState([
    { latitude: 37.3317876, longitude: -122.0054812 },
    { latitude: 37.771707, longitude: -122.4053769 },
  ]);
  const [driverLocation, setDriverLocation] = useState<any>(null);
  const [pickupPoint, setPickupPoint] = useState({ latitude: 37.7749, longitude: -122.4194 });

  const onMapPress = (e: any) => {
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
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
    Location.getCurrentPositionAsync()
      .then((location) => {
        setDriverLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })
      .catch((error) => console.error('Error getting location:', error));
  }, []);

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
        userLocationPriority="high"
        region={mapRegion.mapRegion}
        style={styles.map}
        ref={mapRef}
        onPress={onMapPress}
      >
        {coordinates.map((coordinate, index) => (
        <Marker key={`coordinate_${index}`} coordinate={coordinate} />
      ))}

      {/* {location && <Marker coordinate={location} />} */}

      {coordinates.length >= 2 && (
        <MapViewDirectionItem />
      )}
        {/* {showLocationOfInterest()} */}
        {isOnline && (
          <Marker coordinate={mapRegion.mapRegion}>
            <DriverMarker />
          </Marker>
        )}
        {/* <Marker coordinate={searchedLocation} /> */}
      </MapView>
      <BottomSheetItem snapPoints={snapPoints} bottomSheetRef={bottomSheetRef}/>
      <NavBarIcon />
      <TouchableOpacity
        onPress={() => setSearchView(!searchView)}
        style={styles.searcBar}
      >
        <AntDesign name="search1" size={wp(6)} color="black" />
      </TouchableOpacity>
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
