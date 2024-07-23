import { View, Dimensions } from 'react-native'
import React, {useRef, useState} from 'react'
import MapViewDirections from 'react-native-maps-directions'
import { API_KEY } from '../../Services/authorization'
import MapView from 'react-native-maps'

const MapViewDirectionItem = () => {
    const mapRef = useRef<MapView>(null)
    const [coordinates, setCoordinates] = useState([
        { latitude: 37.3317876, longitude: -122.0054812 },
        { latitude: 37.771707, longitude: -122.4053769 },
      ]);

      const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE = 37.771707;
    const LONGITUDE = -122.4053769;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  return (
    <MapViewDirections
          origin={coordinates[0]}
          waypoints={coordinates.length > 2 ? coordinates.slice(1, -1) : undefined}
          destination={coordinates[coordinates.length - 1]}
          apikey={API_KEY}
          strokeWidth={3}
          strokeColor="blue"
          optimizeWaypoints
          onStart={(params) => {
            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
          }}
          onReady={(result) => {
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);

            // Fit the map view to the route coordinates
            mapRef?.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20,
              },
            });
          }}
          onError={(errorMessage) => {
            // Handle errors
          }}
        />
  )
}

export default MapViewDirectionItem