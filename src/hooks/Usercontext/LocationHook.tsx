import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

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

// interface LocationEncapsulationInterface extends LocationInterface {
//   setMapRegion: React.Dispatch<React.SetStateAction<LocationInterface>>;
// }

export const LocationContext = React.createContext<{
  mapRegion: LocationInterface;
  setMapRegion: React.Dispatch<React.SetStateAction<LocationInterface>>;
}>({
  mapRegion: initailLocationState,
  setMapRegion: () => {
    // No-op
  },
});

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
    <LocationContext.Provider value={{ mapRegion, setMapRegion }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationHook;
