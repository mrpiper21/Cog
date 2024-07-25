import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

interface LocationType {
  latitude: number,
  longitude: number
}
interface LocationInterface {
  longitude: number;
  latitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const initailLocationState: LocationInterface = {
  longitude: 0,
  latitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

interface LocationContextProps {
  location: LocationType;
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>
  mapRegion: LocationInterface;
  setMapRegion: React.Dispatch<React.SetStateAction<LocationInterface>>;
}

export const LocationContext = React.createContext<LocationContextProps | undefined>(undefined);

export const LocationHook: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const mapRef = React.useRef<MapView>(null);
  const navigation = useNavigation() as any;
  //  const [searchView, setSearchView] = useState(false);
  const [mapRegion, setMapRegion] = React.useState<LocationInterface>({
    longitude: 37.78825,
    latitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [location, setLocation] = useState<LocationType>({latitude: 0, longitude: 0})
  const userLocation = async () => {
    mapRef.current?.animateToRegion(mapRegion);
  };

  React.useEffect(() => {
    const func = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.prompt("Error", "There was an error getting your location");
      }
      let location = await Location.getCurrentPositionAsync();
      setMapRegion((prev) => ({
        ...prev,
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      }));
    };
    func();
  }, []);
  return (
    <LocationContext.Provider value={{ location, setLocation, mapRegion, setMapRegion }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationHook;
